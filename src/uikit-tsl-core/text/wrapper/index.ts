import type { GlyphLayoutLine, GlyphOutProperties } from '../layout/index'

export type GlyphWrapper = (
  properties: GlyphOutProperties,
  availableWidth: number | undefined,
  textStartIndex: number,
  target: GlyphLayoutLine,
) => void

export * from './breakall-wrapper'
export * from './nowrap-wrapper'
export * from './word-wrapper'
