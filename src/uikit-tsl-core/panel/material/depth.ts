/**
 * TSL PORT of upstream `panel/material/depth.ts`.
 *
 * Upstream exported module-level SINGLETONS (`instancedPanelDepthMaterial`,
 * `instancedPanelDistanceMaterial`) shared by every panel group. That cannot
 * work here: a TSL node graph captures its backing buffers when it is built, and
 * each `InstancedPanelGroup` owns its own buffers (reallocated on resize). These
 * are therefore factories that the group calls whenever it (re)allocates.
 *
 * KNOWN GAP — SHADOWS (mechanism verified against three 0.186.1)
 * Upstream ran the same panel SDF through these materials
 * (`compilePanelDepthMaterial`) so cast shadows follow rounded corners. On the
 * WebGPU renderer this port targets that CANNOT be reproduced from this file, for
 * two independent reasons:
 *
 *   1. `customDepthMaterial` / `customDistanceMaterial` are read ONLY by
 *      `WebGLShadowMap`. `WebGPURenderer` never consults them, so assigning them
 *      (as `panel/instance/group.ts` still does) is inert: depth is written for
 *      the whole quad, which is why shadows are rectangular today.
 *
 *   2. The WebGPU shadow pass draws the scene with one shared override
 *      `NodeMaterial` per light (`ShadowBaseNode.getShadowMaterial`) and derives
 *      its shape per object from the SOURCE material, through
 *      `Renderer._getShadowNodes( material )`: it reads `material.maskShadowNode`
 *      (falling back to `material.maskNode`) and, when present, runs
 *      `maskNode.not().discard()` inside the shadow fragment. Its only other
 *      inputs are `material.castShadowNode` and `material.colorNode.a`.
 *
 * So the fix belongs on the panel's own material, and the shared maths already
 * there supply it: `createPanelSurface` returns an `opacityNode` which is 0 outside
 * the rounded silhouette — exactly upstream's shadow discard test
 * (`outOpacity < 0.01`). Inside the silhouette it is the panel's OWN opacity, not
 * 1, but that is precisely what upstream tested too (a panel faded below 1% casts
 * no shadow), so comparing it against the same threshold is a faithful port
 * rather than a binary silhouette approximation.
 *
 * That line now lives where the surface is built — see `maskShadowNode` in
 * `./create.ts`, which is the only place it can be wired because the shadow pass
 * reads the SOURCE material. Nothing in THIS file has any effect on either
 * renderer, so treat the two factories below as inert: they exist because
 * `panel/instance/group.ts` and `components/image.ts` still assign them, and
 * removing those assignments is what would let this file be deleted.
 */
import { MeshDepthMaterial, MeshDistanceMaterial, RGBADepthPacking } from 'three/webgpu'
import type { PanelMaterialInfo } from './create'

export function createPanelDepthMaterial(_info: PanelMaterialInfo) {
  const material = new MeshDepthMaterial({ depthPacking: RGBADepthPacking })
  material.clipShadows = true
  return material
}

export function createPanelDistanceMaterial(_info: PanelMaterialInfo) {
  const material = new MeshDistanceMaterial()
  material.clipShadows = true
  return material
}
