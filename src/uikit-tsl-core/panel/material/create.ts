/**
 * TSL PORT of upstream `panel/material/create.ts`.
 *
 * Upstream created a WebGL material and patched its GLSL via `onBeforeCompile`.
 * Here we instantiate a *node* material and attach the TSL graph from `./shader`
 * to its `colorNode` / `opacityNode` (and `normalNode` where supported).
 *
 * WHY NAMED ATTRIBUTES INSTEAD OF ONE 16-FLOAT ATTRIBUTE
 * Upstream declared `attribute mat4 aData` and let three bind it from the
 * geometry. TSL cannot read that: `instancedBufferAttribute(rawArray, 'vec4',
 * 16, offset)` silently produces nothing (verified on the WebGPU renderer — the
 * panel rendered pure white) and the `mat4` branch of that helper returns a
 * matrix with no column accessor.
 *
 * So the descriptor is exposed as four named, itemSize-4 instanced geometry
 * attributes. Those also satisfy `BufferAttributeNode`'s `value.itemSize <= 4`
 * guard, so the instanced flag is *derived* from the attribute rather than
 * forced — which is what makes it work.
 *
 * This restores upstream's `{ type: 'instanced' }` signature: the material
 * resolves its buffers by name at render time, so it does NOT need rebuilding
 * when `InstancedPanelGroup.resize()` reallocates them.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FrontSide } from 'three'
import type { Material, Plane } from 'three'
import {
  attribute,
  float,
  materialColor,
  materialOpacity,
  positionLocal,
  positionWorld,
  uniform,
  uv,
  vec4,
} from 'three/tsl'
import { createClipPlaneUniforms } from './clip'
import { createPanelSurface } from './shader'

export type MaterialClass = { new (...args: Array<any>): Material }

export type PanelMaterialInfo =
  | { type: 'instanced' }
  /**
   * `clippingPlanes` is the component's `createGlobalClippingPlanes()` array —
   * live `RelativePlane`s in world space, read every frame, so passing the array
   * once is enough. Omit it for an unclipped panel.
   */
  | { type: 'normal'; data: Float32Array; clippingPlanes?: ReadonlyArray<Plane> }

export type PanelMaterial = Material & {
  colorNode?: unknown
  opacityNode?: unknown
  normalNode?: unknown
  /** Node<bool>; read by the WebGPU shadow pass to shape cast shadows. */
  maskShadowNode?: unknown
}

/** Geometry attribute names carrying `data[0]`..`data[3]`, one vec4 each. */
export const panelDataAttributeNames = [
  'aData0',
  'aData1',
  'aData2',
  'aData3',
] as const

/** Geometry attribute names carrying the four clipping planes, one vec4 each. */
export const panelClippingAttributeNames = [
  'aClipping0',
  'aClipping1',
  'aClipping2',
  'aClipping3',
] as const

type AnyNode = any

/**
 * The non-instanced equivalent: four `vec4` uniforms refreshed from the shared
 * Float32Array the material setters write into.
 *
 * THE REFRESH IS DRIVEN BY A NODE UPDATE, NOT `material.onBeforeRender`.
 * Upstream's WebGL port used the material hook because `WebGLRenderer` calls it.
 * `WebGPURenderer` does NOT — its render loop calls `object.onBeforeRender` and
 * never the material's (three 0.186, `renderObject`). A material-level hook is
 * therefore dead code here, and the uniforms kept their initial zeros forever:
 * `background` was black at opacity 0, so every non-instanced panel — which is
 * what `<Image>` uses — rendered as nothing at all.
 *
 * `Node.onFrameUpdate` is a hook the node system honours on both backends.
 * Each column registers its own update: three uploads a uniform when its node is
 * updated, so one node updating four siblings would only mark itself dirty.
 */
function uniformColumns(data: Float32Array) {
  const columns = [0, 1, 2, 3].map((index) => {
    const column = uniform(vec4(0, 0, 0, 0)) as AnyNode
    column.onFrameUpdate(() => {
      column.value.set(
        data[index * 4 + 0]!,
        data[index * 4 + 1]!,
        data[index * 4 + 2]!,
        data[index * 4 + 3]!,
      )
    })
    return column
  })

  return { columns: columns as [AnyNode, AnyNode, AnyNode, AnyNode] }
}

export function createPanelMaterial<T extends MaterialClass>(
  PanelMaterialClass: T,
  info: PanelMaterialInfo,
): InstanceType<T> & PanelMaterial {
  const material = new PanelMaterialClass() as InstanceType<T> & PanelMaterial

  material.side = FrontSide
  material.transparent = true
  material.clipShadows = true
  material.shadowSide = FrontSide
  /*
   * Kept for upstream parity, but on WebGPU it does NOTHING: the string
   * `toneMapped` does not appear anywhere in three's WebGPU build. Tone mapping
   * is decided per-render from the RENDERER, not per material
   * (`RenderOutputNode.setup` reads `renderer.toneMapping`), so upstream's way of
   * keeping panels out of the tone-mapping curve has no equivalent here.
   *
   * The panels are therefore only un-tonemapped because `examples-pages/UikitCanvas.tsx`
   * renders with NoToneMapping. Anything that renders these panels through a
   * renderer with tone mapping on — R3F's default is ACESFilmic, which turns the
   * theme's pure white into ~#e3e3e3 and flattens every light surface into the
   * same grey — will get washed-out colours.
   */
  material.toneMapped = false

  let dataColumns: [AnyNode, AnyNode, AnyNode, AnyNode]
  let clippingPlanes: [AnyNode, AnyNode, AnyNode, AnyNode] | null = null

  if (info.type === 'instanced') {
    dataColumns = panelDataAttributeNames.map((name) =>
      attribute(name, 'vec4'),
    ) as [AnyNode, AnyNode, AnyNode, AnyNode]
    clippingPlanes = panelClippingAttributeNames.map((name) =>
      attribute(name, 'vec4'),
    ) as [AnyNode, AnyNode, AnyNode, AnyNode]
  } else {
    dataColumns = uniformColumns(info.data).columns
    if (info.clippingPlanes != null) {
      clippingPlanes = createClipPlaneUniforms(() => info.clippingPlanes)
    }
  }

  /*
   * Clipping planes are expressed in the panel mesh's local space — precisely
   * the space that `instanceMatrix * position` lives in. TSL exposes no
   * `instanceMatrix` accessor, but one is not needed: `positionLocal` is
   * documented as "the transformed vertex position in local space", where
   * "transformed" explicitly covers instancing. For this instanced panel mesh it
   * is literally `instanceMatrix * positionGeometry`, i.e. upstream's
   * `localPosition` verbatim. Using it costs nothing and keeps the four clipping
   * attributes (aClipping0..3) exactly as the scatter already writes them — no
   * CPU baking of planes and no extra per-instance bandwidth.
   *
   * The NON-INSTANCED material takes the other route (see `./clip`): `Image` and
   * `Video` are standalone meshes, so their planes arrive as world-space uniforms
   * and the matching position is `positionWorld`. Upstream ran the clip loop only
   * in its instanced branch, which is exactly why those components never clipped
   * here — handing the planes to `material.clippingPlanes` does nothing on
   * WebGPURenderer.
   */
  const localPosition =
    info.type === 'instanced' ? positionLocal : info.clippingPlanes != null ? positionWorld : null

  /*
   * TEXTURES (`material.map`) — read them through three's own material nodes.
   *
   * Upstream patched the DIFFUSE chunk, so `diffuseColor` already carried the
   * texture and `map`/`mapTransform` were handled by three's stock shader code;
   * this port instead supplies the whole colour from `colorNode`, and that has a
   * consequence worth spelling out because it silently breaks `<Image>`:
   * `NodeMaterial.setupDiffuseColor` reads
   *
   *     let colorNode = this.colorNode ? vec4( this.colorNode ) : materialColor;
   *
   * The `map` lookup lives inside `materialColor` (three's `MaterialNode.COLOR`
   * is `material.color * texture( material.map )`), so assigning a `colorNode`
   * discards it. A hardcoded `vec3( 1, 1, 1 )` here therefore made every texture
   * invisible: the panel still drew, but only its own background colour.
   *
   * Using the reference nodes keeps upstream's behaviour AND its dynamism — they
   * resolve the material at render time, so a `map` assigned after this material
   * is built (which is exactly what `components/image.ts` does, since the texture
   * loads asynchronously) is still picked up. `texture()` applies the texture's
   * `matrix`, which is what `<Image>`'s `objectFit` maths writes into.
   *
   * When there is no map the values are the neutral ones this used to hardcode:
   * `material.color` defaults to white and `material.opacity` to 1.
   */
  const diffuse = materialColor as AnyNode

  const surface = createPanelSurface({
    uv: uv(),
    materialColor: diffuse.rgb,
    materialOpacity: (materialOpacity as AnyNode).mul(diffuse.a),
    borderSize: dataColumns[0],
    background: dataColumns[1],
    borderAndRadius: dataColumns[2],
    dimensions: dataColumns[3],
    clippingPlanes: localPosition == null ? null : clippingPlanes,
    localPosition,
    normal: null,
    tangent: null,
    bitangent: null,
  })

  material.colorNode = surface.colorNode
  material.opacityNode = surface.opacityNode

  /*
   * Shadows follow the rounded silhouette.
   *
   * Upstream ran the same SDF inside the depth material and discarded where
   * `outOpacity < 0.01`. On WebGPU that material is never consulted —
   * `customDepthMaterial`/`customDistanceMaterial` are WebGL-only, so
   * `./depth.ts`'s factories are inert — and the shadow pass instead derives
   * shape from the SOURCE material: `Renderer._getShadowNodes` reads
   * `maskShadowNode` (falling back to `maskNode`) and runs
   * `maskNode.not().discard()` inside a shader `Fn`.
   *
   * So the mask has to be a node that is TRUE where the fragment casts a shadow.
   * `opacityNode` is exactly upstream's `outOpacity` — 0 outside the rounded
   * silhouette, and inside it the panel's own accumulated opacity — so testing it
   * against the same 0.01 threshold reproduces upstream's discard test rather
   * than approximating it with a binary silhouette check. Note the inside value
   * is the panel's opacity, NOT 1: a panel faded below 1% casts no shadow, which
   * is upstream's behaviour too.
   *
   * This feeds the shadow pass only; the colour/opacity path is untouched.
   */
  material.maskShadowNode = surface.opacityNode.greaterThan(float(0.01))

  if (surface.normalNode != null && 'normalNode' in material) {
    material.normalNode = surface.normalNode
  }

  return material
}
/* eslint-enable @typescript-eslint/no-explicit-any */
