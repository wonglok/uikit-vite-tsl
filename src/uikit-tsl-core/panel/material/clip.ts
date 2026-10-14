/**
 * Clipping for materials that are *not* the instanced panel mesh — `Image`/`Video`
 * (non-instanced panel material), `Svg` shape meshes, `Custom` and any plain `Mesh`
 * nested in a `Content`.
 *
 * WHY THIS EXISTS AT ALL: upstream handed clip planes to three the WebGL way
 * (`material.clippingPlanes` + `renderer.localClippingEnabled`). WebGPURenderer
 * never reads `material.clippingPlanes` — the only reader in three 0.186 is
 * `ClippingContext` for `ClippingGroup` scene nodes (`renderers/common/Renderer.js`
 * `_projectObject` → `getGroupContext`), and `NodeMaterial.setupClipping` builds
 * its clip from that context. So every `material.clippingPlanes` assignment in this
 * port is dead code on WebGPU, and those renderables never clipped.
 *
 * Instead the planes go into the node graph as four `vec4` uniforms, exactly like
 * the instanced path's `aClipping0..3` attributes, and are folded into fragment
 * alpha by the same `clipOpacityFor` used for panels and glyphs.
 *
 * THE PLANES ARE IN WORLD SPACE. `createGlobalClippingPlanes` resolves its
 * `RelativePlane`s through the uikit root's parent `matrixWorld`, which is precisely
 * three's own clipping convention, and `positionWorld` is the matching fragment
 * position. Resolving them on every rendered frame (below) keeps that correct even
 * when the whole uikit root moves — no CPU baking, no invalidation bookkeeping.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vector3 } from 'three'
import type { Material, Plane } from 'three'
import { float, materialOpacity, positionWorld, uniform, vec4 } from 'three/tsl'
import { NoClippingPlane } from '../../clipping'
import { clipOpacityFor } from './shader'

type AnyNode = any

/** `undefined` (or a missing index) means "not clipped". */
export type ClipPlaneSource = () => ReadonlyArray<Plane> | undefined

/**
 * `RelativePlane.normal` returns a *shared* module-level scratch plane, so the
 * normal has to be copied out before the next plane is resolved.
 */
const normalHelper = new Vector3()

/**
 * `NoClippingPlane` as uniform components: the distance to it is never negative,
 * so `clipOpacityFor` returns 1 — an unclipped panel.
 *
 * Read inside the closures rather than at module scope so that importing this
 * module cannot depend on `./clipping` being evaluated first.
 */
function writeNoClipping(target: { set(x: number, y: number, z: number, w: number): unknown }): void {
  target.set(NoClippingPlane.normal.x, NoClippingPlane.normal.y, NoClippingPlane.normal.z, NoClippingPlane.constant)
}

/**
 * Four `vec4` uniforms carrying the clip planes as `(normal.xyz, constant)`,
 * refreshed from `getPlanes()` on every rendered frame.
 *
 * The refresh is driven by a node update, not `material.onBeforeRender`: the
 * WebGPU renderer never calls the material hook, and three uploads a uniform when
 * *its* node is updated — so each plane needs its own `onFrameUpdate`, or three of
 * the four would keep their initial value forever. Same reasoning as
 * `uniformColumns` in `./create`.
 *
 * Seeding with `NoClippingPlane` means the very first frame renders unclipped
 * rather than wrongly clipped.
 */
export function createClipPlaneUniforms(getPlanes: ClipPlaneSource): [AnyNode, AnyNode, AnyNode, AnyNode] {
  const columns = [0, 1, 2, 3].map((index) => {
    const column = uniform(vec4(0, 0, 0, 0)) as AnyNode
    writeNoClipping(column.value)
    column.onFrameUpdate(() => {
      const plane = getPlanes()?.[index]
      if (plane == null) {
        writeNoClipping(column.value)
        return
      }
      normalHelper.copy(plane.normal)
      column.value.set(normalHelper.x, normalHelper.y, normalHelper.z, plane.constant)
    })
    return column
  })
  return columns as [AnyNode, AnyNode, AnyNode, AnyNode]
}

/**
 * The clip factor alone, for materials whose opacity node we can wrap.
 * Always 1 where the planes are not clipping.
 */
export function createClipOpacityNode(getPlanes: ClipPlaneSource, position: AnyNode = positionWorld): AnyNode {
  return clipOpacityFor(createClipPlaneUniforms(getPlanes), position) ?? float(1)
}

/**
 * What each material looked like before we wrapped it, keyed by the plane array
 * that was wrapped.
 *
 * The `Content` traversal re-runs on every child change (`notifyAncestorsChanged`)
 * and wrapping twice would nest another copy of the clip node on every pass, so
 * repeated passes with the same planes are a no-op. A material that then turns up
 * under a *different* clipping context (the same material instance reused by two
 * components) is unwrapped back to its original opacity and wrapped again, rather
 * than silently keeping the first component's planes.
 */
const clippedMaterials = new WeakMap<Material, { originalOpacityNode: AnyNode; planes: ReadonlyArray<Plane> }>()

/**
 * Folds clipping into a *node* material's opacity, so a foreign material still
 * gets cut at the panel edge. Returns false for classic WebGL materials
 * (`MeshStandardMaterial` and friends), which have no node graph to inject into —
 * under WebGPU those cannot be clipped at all, so callers should treat the return
 * value as "clipped / cannot clip".
 *
 * `material.opacity` is preserved: assigning `opacityNode` REPLACES three's
 * default `materialOpacity` (`NodeMaterial.setupDiffuseColor`), so the existing
 * opacity — node or property — is multiplied rather than dropped.
 */
export function applyClippingToNodeMaterial(material: Material, planes: ReadonlyArray<Plane>): boolean {
  const nodeMaterial = material as Material & { opacityNode?: AnyNode }
  if (!('opacityNode' in nodeMaterial)) {
    return false
  }
  const applied = clippedMaterials.get(material)
  if (applied != null) {
    if (applied.planes === planes) {
      return true
    }
    nodeMaterial.opacityNode = applied.originalOpacityNode
  } else {
    clippedMaterials.set(material, { originalOpacityNode: nodeMaterial.opacityNode ?? null, planes })
  }
  nodeMaterial.opacityNode = (nodeMaterial.opacityNode ?? materialOpacity).mul(createClipOpacityNode(() => planes))
  /*
   * Clipping works by driving alpha to zero, and alpha only cuts where it is
   * blended — the same reason `createPanelMaterial` and the `Content` traversal
   * set `transparent` on their materials.
   */
  material.transparent = true
  material.needsUpdate = true
  return true
}

/* eslint-enable @typescript-eslint/no-explicit-any */
