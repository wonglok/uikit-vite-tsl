/**
 * GENERATED FILE — mirrors upstream `uikit/src/flex/schema.ts`.
 *
 * The upstream generator is gitignored, so this is reconstructed from the
 * published `@pmndrs/uikit@1.0.76` build. Kept byte-faithful to upstream apart
 * from the explicit return types needed for a standalone build.
 */
import { custom, enum as enumSchema, literal, number, object, union } from 'zod'
import {
  isNumberString,
  isPercentageString,
  isPixelLengthString,
  isViewportLengthString,
} from '../properties/values'
import type {
  AbsoluteLengthValue,
  NumberValue,
  ViewportLengthString,
} from '../properties/values'

function defineSchema<T>(create: () => T): T {
  return create()
}

const numberStringSchema = /* @__PURE__ */ defineSchema(() =>
  custom<`${number}`>(isNumberString, 'Expected a number string'),
)
const percentageStringSchema = /* @__PURE__ */ defineSchema(() =>
  custom<`${number}%`>(isPercentageString, 'Expected a percentage string'),
)
const pixelLengthStringSchema = /* @__PURE__ */ defineSchema(() =>
  custom<`${number}px`>(isPixelLengthString, 'Expected a pixel length string'),
)
const viewportLengthStringSchema = /* @__PURE__ */ defineSchema(() =>
  custom<ViewportLengthString>(
    isViewportLengthString,
    'Expected a viewport length string',
  ),
)

const numberValueSchema = /* @__PURE__ */ defineSchema(() =>
  union([number(), numberStringSchema]),
)

const absoluteLengthValueSchema = /* @__PURE__ */ defineSchema(() =>
  union([numberValueSchema, pixelLengthStringSchema]),
)

export const yogaLengthValueSchema = /* @__PURE__ */ defineSchema(() =>
  union([
    numberValueSchema,
    pixelLengthStringSchema,
    percentageStringSchema,
    viewportLengthStringSchema,
  ]),
)

export const yogaLengthValueOrAutoSchema = /* @__PURE__ */ defineSchema(() =>
  union([yogaLengthValueSchema, literal('auto')]),
)

const ALIGN_VALUES = [
  'auto',
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
  'space-between',
  'space-around',
  'space-evenly',
] as const

export const yogaPropertyShape = /* @__PURE__ */ defineSchema(() => ({
  positionType: enumSchema(['static', 'relative', 'absolute']).optional(),
  positionTop: yogaLengthValueOrAutoSchema.optional(),
  positionLeft: yogaLengthValueOrAutoSchema.optional(),
  positionRight: yogaLengthValueOrAutoSchema.optional(),
  positionBottom: yogaLengthValueOrAutoSchema.optional(),
  alignContent: enumSchema(ALIGN_VALUES).optional(),
  alignItems: enumSchema(ALIGN_VALUES).optional(),
  alignSelf: enumSchema(ALIGN_VALUES).optional(),
  flexDirection: enumSchema([
    'column',
    'column-reverse',
    'row',
    'row-reverse',
  ]).optional(),
  flexWrap: enumSchema(['no-wrap', 'wrap', 'wrap-reverse']).optional(),
  justifyContent: enumSchema([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]).optional(),
  marginTop: yogaLengthValueOrAutoSchema.optional(),
  marginLeft: yogaLengthValueOrAutoSchema.optional(),
  marginRight: yogaLengthValueOrAutoSchema.optional(),
  marginBottom: yogaLengthValueOrAutoSchema.optional(),
  flexBasis: yogaLengthValueOrAutoSchema.optional(),
  flexGrow: numberValueSchema.optional(),
  flexShrink: numberValueSchema.optional(),
  width: yogaLengthValueOrAutoSchema.optional(),
  height: yogaLengthValueOrAutoSchema.optional(),
  minWidth: yogaLengthValueSchema.optional(),
  minHeight: yogaLengthValueSchema.optional(),
  maxWidth: yogaLengthValueSchema.optional(),
  maxHeight: yogaLengthValueSchema.optional(),
  boxSizing: numberValueSchema.optional(),
  aspectRatio: numberValueSchema.optional(),
  borderTopWidth: absoluteLengthValueSchema.optional(),
  borderLeftWidth: absoluteLengthValueSchema.optional(),
  borderRightWidth: absoluteLengthValueSchema.optional(),
  borderBottomWidth: absoluteLengthValueSchema.optional(),
  overflow: enumSchema(['visible', 'hidden', 'scroll']).optional(),
  display: enumSchema(['flex', 'none', 'contents']).optional(),
  paddingTop: yogaLengthValueSchema.optional(),
  paddingLeft: yogaLengthValueSchema.optional(),
  paddingRight: yogaLengthValueSchema.optional(),
  paddingBottom: yogaLengthValueSchema.optional(),
  gapRow: yogaLengthValueSchema.optional(),
  gapColumn: yogaLengthValueSchema.optional(),
  direction: numberValueSchema.optional(),
}))

export const yogaOutPropertiesSchema = /* @__PURE__ */ defineSchema(() =>
  object(yogaPropertyShape).strict(),
)

/** The resolved (post-parse) flex properties a component exposes. */
export type YogaProperties = {
  [Key in keyof typeof yogaPropertyShape]?: unknown
}

export type {
  AbsoluteLengthValue,
  NumberValue,
  ViewportLengthString,
}
