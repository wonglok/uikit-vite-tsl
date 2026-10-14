/**
 * GENERATED FILE — mirrors upstream `uikit/src/flex/setter.ts`.
 *
 * Upstream generates this from the live yoga-layout `Node` prototype (see
 * `scripts/flex-generate-setter.ts`), and the generator is gitignored, so this
 * is reconstructed from the published `@pmndrs/uikit@1.0.76` build and
 * re-typed against `setter.d.ts`. The numeric LUTs are the enum values yoga
 * actually defines; they are kept numeric to stay byte-faithful to upstream.
 *
 * If yoga-layout is ever upgraded, regenerate this rather than hand-editing.
 */
import type { Node } from 'yoga-layout/load'
import type { RootContext } from '../context'
import {
  convertYogaPoint,
  parseAbsoluteLengthValue,
} from '../properties/values'
import type {
  AbsoluteLengthValue,
  LengthValue,
  NumberValue,
} from '../properties/values'

type EnumLut<Key extends string> = Readonly<Record<Key, number>>

function convertEnum<Key extends string>(
  lut: EnumLut<Key>,
  input: Key | undefined,
  defaultValue: number,
): number {
  if (input == null) {
    return defaultValue
  }
  const resolvedValue = lut[input]
  if (resolvedValue == null) {
    throw new Error(
      `unexpected value ${input}, expected ${Object.keys(lut).join(', ')}`,
    )
  }
  return resolvedValue
}

function convertPoint(input: LengthValue | undefined, root: RootContext) {
  const [width, height] = root.component.size.value ?? [0, 0]
  return convertYogaPoint(input, width, height)
}

function convertNumber(input: AbsoluteLengthValue | undefined) {
  return input == null ? undefined : parseAbsoluteLengthValue(input)
}

const POSITION_TYPE_LUT: EnumLut<'static' | 'relative' | 'absolute'> = {
  static: 0,
  relative: 1,
  absolute: 2,
}

const ALIGN_LUT: EnumLut<
  | 'auto'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
> = {
  auto: 0,
  'flex-start': 1,
  center: 2,
  'flex-end': 3,
  stretch: 4,
  baseline: 5,
  'space-between': 6,
  'space-around': 7,
  'space-evenly': 8,
}

const FLEX_DIRECTION_LUT: EnumLut<
  'column' | 'column-reverse' | 'row' | 'row-reverse'
> = {
  column: 0,
  'column-reverse': 1,
  row: 2,
  'row-reverse': 3,
}

const WRAP_LUT: EnumLut<'no-wrap' | 'wrap' | 'wrap-reverse'> = {
  'no-wrap': 0,
  wrap: 1,
  'wrap-reverse': 2,
}

const JUSTIFY_LUT: EnumLut<
  'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
> = {
  'flex-start': 0,
  center: 1,
  'flex-end': 2,
  'space-between': 3,
  'space-around': 4,
  'space-evenly': 5,
}

const OVERFLOW_LUT: EnumLut<'visible' | 'hidden' | 'scroll'> = {
  visible: 0,
  hidden: 1,
  scroll: 2,
}

const DISPLAY_LUT: EnumLut<'flex' | 'none' | 'contents'> = {
  flex: 0,
  none: 1,
  contents: 2,
}

export const setter = {
  positionType: (
    _root: RootContext,
    node: Node,
    input: 'static' | 'relative' | 'absolute' | undefined,
  ) => {
    node.setPositionType(convertEnum(POSITION_TYPE_LUT, input, 1))
  },
  positionTop: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setPositionAuto(1)
      return
    }
    node.setPosition(1, convertPoint(input, _root))
  },
  positionLeft: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setPositionAuto(0)
      return
    }
    node.setPosition(0, convertPoint(input, _root))
  },
  positionRight: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setPositionAuto(2)
      return
    }
    node.setPosition(2, convertPoint(input, _root))
  },
  positionBottom: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setPositionAuto(3)
      return
    }
    node.setPosition(3, convertPoint(input, _root))
  },
  alignContent: (_root: RootContext, node: Node, input: keyof typeof ALIGN_LUT | undefined) => {
    node.setAlignContent(convertEnum(ALIGN_LUT, input, 4))
  },
  alignItems: (_root: RootContext, node: Node, input: keyof typeof ALIGN_LUT | undefined) => {
    node.setAlignItems(convertEnum(ALIGN_LUT, input, 4))
  },
  alignSelf: (_root: RootContext, node: Node, input: keyof typeof ALIGN_LUT | undefined) => {
    node.setAlignSelf(convertEnum(ALIGN_LUT, input, 0))
  },
  flexDirection: (
    _root: RootContext,
    node: Node,
    input: keyof typeof FLEX_DIRECTION_LUT | undefined,
  ) => {
    node.setFlexDirection(convertEnum(FLEX_DIRECTION_LUT, input, 2))
  },
  flexWrap: (_root: RootContext, node: Node, input: keyof typeof WRAP_LUT | undefined) => {
    node.setFlexWrap(convertEnum(WRAP_LUT, input, 0))
  },
  justifyContent: (
    _root: RootContext,
    node: Node,
    input: keyof typeof JUSTIFY_LUT | undefined,
  ) => {
    node.setJustifyContent(convertEnum(JUSTIFY_LUT, input, 0))
  },
  marginTop: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setMarginAuto(1)
      return
    }
    node.setMargin(1, convertPoint(input, _root))
  },
  marginLeft: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setMarginAuto(0)
      return
    }
    node.setMargin(0, convertPoint(input, _root))
  },
  marginRight: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setMarginAuto(2)
      return
    }
    node.setMargin(2, convertPoint(input, _root))
  },
  marginBottom: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setMarginAuto(3)
      return
    }
    node.setMargin(3, convertPoint(input, _root))
  },
  flexBasis: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setFlexBasisAuto()
      return
    }
    node.setFlexBasis(convertPoint(input, _root) ?? NaN)
  },
  flexGrow: (_root: RootContext, node: Node, input: NumberValue | undefined) => {
    node.setFlexGrow(convertNumber(input) ?? 0)
  },
  flexShrink: (_root: RootContext, node: Node, input: NumberValue | undefined) => {
    node.setFlexShrink(convertNumber(input) ?? 1)
  },
  width: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setWidthAuto()
      return
    }
    node.setWidth(convertPoint(input, _root) ?? NaN)
  },
  height: (_root: RootContext, node: Node, input: LengthValue | 'auto' | undefined) => {
    if (input === 'auto') {
      node.setHeightAuto()
      return
    }
    node.setHeight(convertPoint(input, _root) ?? NaN)
  },
  minWidth: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setMinWidth(convertPoint(input, _root))
  },
  minHeight: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setMinHeight(convertPoint(input, _root))
  },
  maxWidth: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setMaxWidth(convertPoint(input, _root))
  },
  maxHeight: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setMaxHeight(convertPoint(input, _root))
  },
  boxSizing: (_root: RootContext, node: Node, input: NumberValue | undefined) => {
    node.setBoxSizing(convertNumber(input) ?? 0)
  },
  aspectRatio: (_root: RootContext, node: Node, input: NumberValue | undefined) => {
    node.setAspectRatio(convertNumber(input))
  },
  borderTopWidth: (_root: RootContext, node: Node, input: AbsoluteLengthValue | undefined) => {
    node.setBorder(1, convertNumber(input))
  },
  borderLeftWidth: (_root: RootContext, node: Node, input: AbsoluteLengthValue | undefined) => {
    node.setBorder(0, convertNumber(input))
  },
  borderRightWidth: (_root: RootContext, node: Node, input: AbsoluteLengthValue | undefined) => {
    node.setBorder(2, convertNumber(input))
  },
  borderBottomWidth: (_root: RootContext, node: Node, input: AbsoluteLengthValue | undefined) => {
    node.setBorder(3, convertNumber(input))
  },
  overflow: (_root: RootContext, node: Node, input: keyof typeof OVERFLOW_LUT | undefined) => {
    node.setOverflow(convertEnum(OVERFLOW_LUT, input, 0))
  },
  display: (_root: RootContext, node: Node, input: keyof typeof DISPLAY_LUT | undefined) => {
    node.setDisplay(convertEnum(DISPLAY_LUT, input, 0))
  },
  paddingTop: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setPadding(1, convertPoint(input, _root))
  },
  paddingLeft: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setPadding(0, convertPoint(input, _root))
  },
  paddingRight: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setPadding(2, convertPoint(input, _root))
  },
  paddingBottom: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setPadding(3, convertPoint(input, _root))
  },
  gapRow: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setGap(1, convertPoint(input, _root))
  },
  gapColumn: (_root: RootContext, node: Node, input: LengthValue | undefined) => {
    node.setGap(0, convertPoint(input, _root))
  },
  direction: (_root: RootContext, node: Node, input: NumberValue | undefined) => {
    node.setDirection(convertNumber(input) ?? 0)
  },
}
