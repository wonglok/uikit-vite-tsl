import type { z } from 'zod'
import { baseOutPropertiesSchema, createInPropertiesSchema, defineSchema } from '../../../../index'
import { Container, InProperties, BaseOutProperties } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const DialogHeaderOutPropertiesSchema = baseOutPropertiesSchema

export const DialogHeaderPropertiesSchema = /* @__PURE__ */ defineSchema(() =>
  createInPropertiesSchema(DialogHeaderOutPropertiesSchema),
)

export type DialogHeaderOutProperties = BaseOutProperties & z.output<typeof DialogHeaderOutPropertiesSchema>

export type DialogHeaderProperties = z.input<typeof DialogHeaderPropertiesSchema>

export class DialogHeader extends Container<DialogHeaderOutProperties> {
  constructor(
    inputProperties?: DialogHeaderProperties,
    initialClasses?: Array<InProperties<BaseOutProperties> | string>,
    config?: { renderContext?: any; defaultOverrides?: InProperties<DialogHeaderOutProperties> },
  ) {
    super(inputProperties, initialClasses, {
      defaults: componentDefaults,
      ...config,
      defaultOverrides: {
        '*': {
          borderColor: colors.border,
        },
        flexDirection: 'column',
        gap: 6,
        ...config?.defaultOverrides,
      },
    })
  }
}
