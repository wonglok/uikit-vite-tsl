import { ReadonlySignal, Signal, computed, signal } from '@preact/signals-core'
import { Matrix4, Vector2Tuple } from 'three'
import { ClippingRect } from '../../clipping'
import { setupOrderInfo, ElementType, OrderInfo } from '../../order'
import { PanelProperties } from '../../panel/instance/panel'
import { setupInstancedPanel } from '../../panel/instance/setup'
import { abortableEffect, ColorRepresentation, computedBorderInset } from '../../utils'
import { PanelGroupProperties, computedPanelMatrix } from '../../panel/instance/index'
import { PanelMaterialConfig, createPanelMaterialConfig } from '../../panel/material/config'
import { Properties } from '../../properties/index'
import { RootContext } from '../../context'
import { parseAbsoluteLengthValue, type AbsoluteLengthValue } from '../../properties/values'
import type { CaretTransformation } from '../layout/index'

export type { CaretTransformation } from '../layout/index'

type CaretWidthProperties = {
  caretWidth?: AbsoluteLengthValue
}

type CaretBorderSizeProperties = {
  caretBorderRightWidth?: AbsoluteLengthValue
  caretBorderTopWidth?: AbsoluteLengthValue
  caretBorderLeftWidth?: AbsoluteLengthValue
  caretBorderBottomWidth?: AbsoluteLengthValue
}

const caretBorderKeys = [
  'caretBorderRightWidth',
  'caretBorderTopWidth',
  'caretBorderLeftWidth',
  'caretBorderBottomWidth',
]

export type CaretProperties = {
  caretColor?: ColorRepresentation
} & CaretWidthProperties &
  CaretBorderSizeProperties & {
    [Key in Exclude<keyof PanelProperties, 'opacity'> as `caret${Capitalize<Key>}`]?: PanelProperties[Key]
  }

let caretMaterialConfig: PanelMaterialConfig | undefined
function getCaretMaterialConfig() {
  caretMaterialConfig ??= createPanelMaterialConfig(
    {
      backgroundColor: 'caretColor',
      borderBend: 'caretBorderBend',
      borderBottomLeftRadius: 'caretBorderBottomLeftRadius',
      borderBottomRightRadius: 'caretBorderBottomRightRadius',
      borderColor: 'caretBorderColor',
      borderTopLeftRadius: 'caretBorderTopLeftRadius',
      borderTopRightRadius: 'caretBorderTopRightRadius',
    },
    {
      backgroundColor: 0x0,
    },
  )
  return caretMaterialConfig
}

export function setupCaret(
  properties: Properties,
  globalMatrix: Signal<Matrix4 | undefined>,
  caretTransformation: ReadonlySignal<CaretTransformation | undefined>,
  isVisible: Signal<boolean>,
  parentOrderInfo: Signal<OrderInfo | undefined>,
  parentGroupDeps: ReadonlySignal<Required<PanelGroupProperties>>,
  parentClippingRect: Signal<ClippingRect | undefined> | undefined,
  root: Signal<RootContext>,
  abortSignal: AbortSignal,
) {
  const orderInfo = signal<OrderInfo | undefined>(undefined)
  setupOrderInfo(orderInfo, properties, 'zIndex', ElementType.Panel, parentGroupDeps, parentOrderInfo, abortSignal)
  const blinkingCaretTransformation = signal<CaretTransformation | undefined>(undefined)
  abortableEffect(() => {
    const pos = caretTransformation.value
    if (pos == null) {
      blinkingCaretTransformation.value = undefined
      return
    }
    blinkingCaretTransformation.value = pos
    const ref = setInterval(
      () => (blinkingCaretTransformation.value = blinkingCaretTransformation.peek() == null ? pos : undefined),
      500,
    )
    return () => clearInterval(ref)
  }, abortSignal)
  const borderInset = computedBorderInset(properties, caretBorderKeys)

  const panelSize = computed<Vector2Tuple>(() => {
    const height = blinkingCaretTransformation.value?.height
    if (height == null) {
      return [0, 0]
    }
    return [parseAbsoluteLengthValue(properties.value.caretWidth ?? 0), height]
  })
  const panelOffset = computed<Vector2Tuple>(() => {
    const position = blinkingCaretTransformation.value?.position
    if (position == null) {
      return [0, 0]
    }
    return [position[0] - parseAbsoluteLengthValue(properties.value.caretWidth ?? 0) / 2, position[1]]
  })

  const panelMatrix = computedPanelMatrix(properties, globalMatrix, panelSize, panelOffset)

  setupInstancedPanel(
    properties,
    root,
    orderInfo,
    parentGroupDeps,
    panelMatrix,
    panelSize,
    borderInset,
    parentClippingRect,
    isVisible,
    getCaretMaterialConfig(),
    abortSignal,
  )
}
