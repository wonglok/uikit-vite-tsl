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
import type { Material } from 'three'
import { attribute, float, positionLocal, uniform, uv, vec3, vec4 } from 'three/tsl'
import { createPanelSurface } from './shader'

export type MaterialClass = { new (...args: Array<any>): Material }

export type PanelMaterialInfo =
  | { type: 'instanced' }
  | { type: 'normal'; data: Float32Array }

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
 * Float32Array, which the material setters write into in place.
 */
function uniformColumns(data: Float32Array) {
  const columns = [0, 1, 2, 3].map(() => uniform(vec4(0, 0, 0, 0)))

  const sync = () => {
    for (let index = 0; index < 4; index += 1) {
      columns[index]!.value.set(
        data[index * 4 + 0]!,
        data[index * 4 + 1]!,
        data[index * 4 + 2]!,
        data[index * 4 + 3]!,
      )
    }
  }

  return { columns: columns as [AnyNode, AnyNode, AnyNode, AnyNode], sync }
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
  material.toneMapped = false

  let dataColumns: [AnyNode, AnyNode, AnyNode, AnyNode]
  let clippingPlanes: [AnyNode, AnyNode, AnyNode, AnyNode] | null = null
  let sync: (() => void) | undefined

  if (info.type === 'instanced') {
    dataColumns = panelDataAttributeNames.map((name) =>
      attribute(name, 'vec4'),
    ) as [AnyNode, AnyNode, AnyNode, AnyNode]
    clippingPlanes = panelClippingAttributeNames.map((name) =>
      attribute(name, 'vec4'),
    ) as [AnyNode, AnyNode, AnyNode, AnyNode]
  } else {
    const uniforms = uniformColumns(info.data)
    dataColumns = uniforms.columns
    sync = uniforms.sync
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
   * The non-instanced material has no clipping planes (upstream ran the clip
   * loop only in its instanced branch), so localPosition stays null there and
   * `createPanelSurface` skips the loop.
   */
  const localPosition = info.type === 'instanced' ? positionLocal : null

  const surface = createPanelSurface({
    uv: uv(),
    materialColor: vec3(1, 1, 1),
    materialOpacity: float(1),
    borderSize: dataColumns[0],
    background: dataColumns[1],
    borderAndRadius: dataColumns[2],
    dimensions: dataColumns[3],
    clippingPlanes: localPosition ? clippingPlanes : null,
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

  if (sync) {
    const previous = material.onBeforeRender
    material.onBeforeRender = function (...args: Parameters<Material['onBeforeRender']>) {
      sync!()
      previous?.apply(this, args)
    }
  }

  return material
}
/* eslint-enable @typescript-eslint/no-explicit-any */
