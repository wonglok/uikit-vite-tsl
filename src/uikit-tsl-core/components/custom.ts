import type { z } from 'zod'
import { baseOutPropertiesSchema, createInPropertiesSchema, defineSchema } from '../properties/schema'
import { computed } from '@preact/signals-core'
import { createGlobalClippingPlanes } from '../clipping'
import { applyClippingToNodeMaterial } from '../panel/material/index'
import { setupOrderInfo, ElementType, setupRenderOrder } from '../order'
import { BaseOutProperties, InProperties, WithSignal } from '../properties/index'
import { abortableEffect, setupMatrixWorldUpdate } from '../utils'
import { Component } from './component'
import { Material, MeshDepthMaterial, MeshDistanceMaterial } from 'three'
import { MeshBasicNodeMaterial } from 'three/webgpu'
import { RenderContext } from '../context'
import { parseNumberValue } from '../properties/values'
export const CustomPropertiesSchema = /* @__PURE__ */ defineSchema(() =>
  createInPropertiesSchema(baseOutPropertiesSchema),
)

export type CustomOutProperties = BaseOutProperties
export type CustomProperties = z.input<typeof CustomPropertiesSchema>

export class Custom<OutProperties extends CustomOutProperties = CustomOutProperties> extends Component<OutProperties> {
  constructor(
    inputProperties?: InProperties<OutProperties>,
    initialClasses?: Array<InProperties<BaseOutProperties> | string>,
    protected inputConfig?: {
      material?: Material
      renderContext?: RenderContext
      defaultOverrides?: InProperties<OutProperties>
      defaults?: WithSignal<OutProperties>
    },
  ) {
    super(inputProperties, initialClasses, {
      hasNonUikitChildren: false,
      /*
       * A *node* material by default, like the panel default
       * (`properties/defaults.ts`). Without this, a `<Custom>` built through the
       * React wrapper — which never passes a material — gets three's classic
       * `MeshBasicMaterial` from the `Mesh` superclass, and the clip cannot be
       * injected into it at all (see the note below).
       */
      material: new MeshBasicNodeMaterial(),
      ...inputConfig,
    })

    setupOrderInfo(
      this.orderInfo,
      this.properties,
      'zIndex',
      ElementType.Custom,
      undefined,
      computed(() => (this.parentContainer.value == null ? null : this.parentContainer.value.orderInfo.value)),
      this.abortSignal,
    )

    this.frustumCulled = false
    setupRenderOrder(this, this.root, this.orderInfo)

    const clippingPlanes = createGlobalClippingPlanes(this)

    this.customDepthMaterial = new MeshDepthMaterial()
    this.customDistanceMaterial = new MeshDistanceMaterial()
    /*
     * `material.clippingPlanes` is kept for WebGL parity but does nothing on
     * WebGPURenderer (three only collects clipping from `ClippingGroup` scene
     * nodes there). The material the caller supplied is what actually has to carry
     * the clip, and that is only possible when it is a *node* material:
     * `applyClippingToNodeMaterial` folds the planes into its opacity. A classic
     * WebGL material — `new MeshStandardMaterial()` passed to `Custom` — has no
     * node graph to inject into and will NOT clip under WebGPU.
     */
    this.material.clippingPlanes = clippingPlanes
    this.customDepthMaterial.clippingPlanes = clippingPlanes
    this.customDistanceMaterial.clippingPlanes = clippingPlanes
    applyClippingToNodeMaterial(this.material, clippingPlanes)

    abortableEffect(() => {
      this.material.depthTest = this.properties.value.depthTest
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      this.material.depthWrite = this.properties.value.depthWrite ?? false
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      this.renderOrder = parseNumberValue(this.properties.value.renderOrder ?? 0)
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      this.castShadow = this.properties.value.castShadow
      this.root.peek().requestRender?.()
    }, this.abortSignal)
    abortableEffect(() => {
      this.receiveShadow = this.properties.value.receiveShadow
      this.root.peek().requestRender?.()
    }, this.abortSignal)

    setupMatrixWorldUpdate(this, this.root, this.globalPanelMatrix, this.abortSignal)

    abortableEffect(() => {
      this.visible = this.isVisible.value
      this.root.peek().requestRender?.()
    }, this.abortSignal)
  }

  clone(recursive?: boolean): this {
    const cloned = new Custom(this.inputProperties, this.initialClasses, this.inputConfig) as this
    this.copyInto(cloned, recursive)
    return cloned
  }
}
