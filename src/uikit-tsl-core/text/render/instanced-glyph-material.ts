/**
 * TSL PORT of upstream `text/render/instanced-glyph-material.ts`.
 *
 * Upstream extended `MeshBasicMaterial` and string-injected GLSL via
 * `onBeforeCompile`, which only runs on the WebGL renderer. This rebuilds the
 * MSDF glyph shader as a TSL node graph on `MeshBasicNodeMaterial`.
 *
 * MSDF RECONSTRUCTION (upstream's maths, mapped node-for-node)
 *
 *   median(r,g,b) = max(min(r,g), min(max(r,g), b))
 *
 * The RGB atlas holds a multi-channel signed distance field: three channels with
 * different "true" edges, so the median discards the corner artefacts that
 * single-channel distance fields suffer from. The median is a normalised
 * distance where 0.5 marks the glyph edge, hence:
 *
 *   dist   = (median - 0.5) * distanceRange          signed distance, in texels
 *   aaDist = length(fwidth(fontUv * pageSize)) / 2   texels per pixel, halved
 *   alpha  = smoothstep(-aaDist, aaDist, dist)       coverage
 *   alpha  = pow(alpha, 1/1.3)                       gamma, crisper edges
 *
 * `fontUv * pageSize` exists purely so the derivative is measured in atlas
 * texels rather than UV units. `renderSolid` forces coverage to 1 for synthetic
 * glyphs (upstream's MISSING_GLYPH), which draw as filled rectangles.
 *
 * ATTRIBUTE LAYOUT
 * Upstream declared `attribute vec4 instanceUVOffset` and friends directly on
 * the geometry. Those are plain itemSize-4 attributes bound by name — exactly
 * the layout verified to work with TSL — so they need no reshaping.
 *
 * The exception is `instanceClipping`, which upstream declared as a `mat4`
 * (16 floats per instance). WebGPU cannot bind an itemSize-16 attribute
 * (`float32x16` is not a valid vertex format), so the mesh re-exposes the same
 * backing array as four itemSize-4 interleaved columns (`instanceClipping0..3`)
 * that this material reads. See the mesh for that wiring.
 *
 * The `instanceUVOffset` trick: `xy` is the atlas UV origin and `zw` the size,
 * with a NEGATIVE height. That negative height, paired with `page.flipY = false`,
 * is what orients the glyph. It is load-bearing — do not "fix" the sign.
 */
import {
  attribute,
  dot,
  float,
  fwidth,
  max,
  min,
  positionLocal,
  smoothstep,
  texture,
  uv,
  vec2,
} from 'three/tsl'
import { MeshBasicNodeMaterial } from 'three/webgpu'
import type { Font } from '../font'

/** Geometry attribute names carrying the per-glyph instance data. */
export const glyphAttributeNames = {
  uvOffset: 'instanceUVOffset',
  rgba: 'instanceRGBA',
  renderSolid: 'instanceRenderSolid',
} as const

/**
 * Geometry attribute names carrying the four per-instance clipping planes as
 * itemSize-4 columns.
 *
 * The write side still produces a single per-instance mat4 (`instanceClipping`,
 * 16 floats per glyph, matching upstream's `attribute mat4 instanceClipping`).
 * That layout cannot be read here: on WebGPU an itemSize-16 geometry attribute
 * maps to the invalid vertex format `float32x16` and the pipeline fails to
 * build. The mesh therefore re-exposes the very same backing Float32Array as
 * four strided itemSize-4 interleaved views under these names — the itemSize-4
 * layout TSL reads reliably — so the planes reach the shader untouched.
 */
export const glyphClippingAttributeNames = [
  'instanceClipping0',
  'instanceClipping1',
  'instanceClipping2',
  'instanceClipping3',
] as const

/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyNode = any

/** Gamma applied to the coverage ramp so thin strokes stay legible. */
const TEXT_GAMMA = 1.3

export class InstancedGlyphMaterial extends MeshBasicNodeMaterial {
  constructor(font: Font) {
    super({
      transparent: true,
      depthWrite: false,
      toneMapped: false,
    })

    const distanceRange: AnyNode = float(font.distanceRange)
    const pageSize: AnyNode = vec2(font.pageWidth, font.pageHeight)

    const instanceUVOffset: AnyNode = attribute(glyphAttributeNames.uvOffset, 'vec4')
    const instanceRGBA: AnyNode = attribute(glyphAttributeNames.rgba, 'vec4')
    const instanceRenderSolid: AnyNode = attribute(glyphAttributeNames.renderSolid, 'float')

    // Four clipping planes, one itemSize-4 column each (see the mesh for how the
    // writer's mat4 is re-exposed as these).
    const clippingPlanes: Array<AnyNode> = glyphClippingAttributeNames.map((name) =>
      attribute(name, 'vec4'),
    )

    // fontUv = instanceUVOffset.xy + uv * instanceUVOffset.zw
    const fontUv: AnyNode = instanceUVOffset.xy.add(uv().mul(instanceUVOffset.zw))

    const sample: AnyNode = texture(font.page, fontUv).rgb

    // Median of the three MSDF channels — the reconstruction the format needs.
    const median: AnyNode = max(
      min(sample.r, sample.g),
      min(max(sample.r, sample.g), sample.b),
    )

    // Signed distance to the glyph edge, in texels.
    const dist: AnyNode = median.sub(0.5).mul(distanceRange)

    // Texels per screen pixel, halved, clamped so zooming out cannot over-blur.
    const texelsPerPixel: AnyNode = fwidth(fontUv.mul(pageSize)).length().mul(0.5)
    const aaDist: AnyNode = min(texelsPerPixel, distanceRange.mul(0.5))

    const coverage: AnyNode = smoothstep(aaDist.negate(), aaDist, dist)

    const isSolid: AnyNode = instanceRenderSolid.greaterThan(0.5)

    // Solid glyphs render at full coverage; others get the gamma ramp.
    const alpha: AnyNode = isSolid.select(
      float(1),
      coverage.pow(float(1).div(TEXT_GAMMA)),
    )

    /*
     * Upstream discarded fully-transparent non-solid fragments early:
     *   if (alpha <= 0.0 && renderSolid <= 0.5) discard;
     *
     * That is intentionally NOT reproduced. `If`/`Discard` require an active
     * shader stack, which does not exist while a material's node graph is being
     * constructed — calling them here throws
     * "Cannot read properties of null (reading 'If')". It is also redundant:
     * with `transparent: true` and `depthWrite: false`, a zero-opacity fragment
     * blends as nothing, which is visually identical.
     */

    // Upstream: `diffuseColor *= rgba` and `diffuseColor.a *= clipOpacity * alpha`.
    this.colorNode = instanceRGBA.rgb
    this.opacityNode = instanceRGBA.w.mul(alpha).mul(
      clipOpacityFor(clippingPlanes, positionLocal),
    )
  }
}

/**
 * Per-instance clipping, mirroring upstream's glyph fragment loop.
 *
 * `localPosition` is `instanceMatrix * position` in the glyph mesh's local space
 * — the space the planes are written in. TSL exposes exactly that value as
 * `positionLocal` ("transformed … instancing" included), so no `instanceMatrix`
 * accessor is needed. `fwidth` forces this to the fragment stage; upstream's
 * early `discard` is replaced by accumulating the product (identical result,
 * and Discard is unavailable outside a shader stack).
 */
function clipOpacityFor(planes: Array<AnyNode>, localPosition: AnyNode): AnyNode {
  let clip: AnyNode = float(1)
  for (const plane of planes) {
    const distanceToPlane = dot(localPosition, plane.xyz).add(plane.w)
    // fwidth( d ) / 2, floored so the smoothstep never collapses to zero width.
    const gradient = max(fwidth(distanceToPlane).mul(0.5), float(0.00001))
    clip = clip.mul(smoothstep(gradient.negate(), gradient, distanceToPlane))
  }
  return clip
}
/* eslint-enable @typescript-eslint/no-explicit-any */
