import { Signal } from '@preact/signals-core'
import { Matrix4, Vector2Tuple } from 'three'
import { ClippingRect } from '../../clipping'
import { RootContext } from '../../context'
import { Inset } from '../../flex/node'
import { OrderInfo } from '../../order'
import { Properties } from '../../properties/index'
import { abortableEffect } from '../../utils'
import { PanelMaterialConfig } from '../material/config'
import { InstancedPanel } from './panel'
import type { PanelGroupProperties } from './properties'

export function setupInstancedPanel(
  properties: Properties,
  root: Signal<RootContext>,
  orderInfo: Signal<OrderInfo | undefined>,
  panelGroupDependencies: Signal<Required<PanelGroupProperties>>,
  panelMatrix: Signal<Matrix4 | undefined>,
  size: Signal<Vector2Tuple | undefined>,
  borderInset: Signal<Inset | undefined>,
  clippingRect: Signal<ClippingRect | undefined> | undefined,
  isVisible: Signal<boolean>,
  materialConfig: PanelMaterialConfig,
  abortSignal: AbortSignal,
) {
  abortableEffect(() => {
    const isEnabled = properties.enabled.value
    const currentOrderInfo = orderInfo.value
    if (!isEnabled || currentOrderInfo == null) {
      return
    }
    const innerAbortController = new AbortController()
    const group = root.value.panelGroupManager.getGroup(currentOrderInfo, panelGroupDependencies.value)
    new InstancedPanel(
      properties,
      group,
      currentOrderInfo.patchIndex,
      panelMatrix,
      size,
      borderInset,
      clippingRect,
      isVisible,
      materialConfig,
      innerAbortController.signal,
    )
    return () => innerAbortController.abort()
  }, abortSignal)
}
