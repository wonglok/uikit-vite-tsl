import type { z } from 'zod'
import { baseOutPropertiesSchema, createInPropertiesSchema, defineSchema } from '../../../../index'
import { Container, InProperties, BaseOutProperties, RenderContext } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const AlertDialogHeaderOutPropertiesSchema = baseOutPropertiesSchema

export const AlertDialogHeaderPropertiesSchema = /* @__PURE__ */ defineSchema(() =>
  createInPropertiesSchema(AlertDialogHeaderOutPropertiesSchema),
)

export type AlertDialogHeaderOutProperties = BaseOutProperties & z.output<typeof AlertDialogHeaderOutPropertiesSchema>

export type AlertDialogHeaderProperties = z.input<typeof AlertDialogHeaderPropertiesSchema>

export class AlertDialogHeader extends Container<AlertDialogHeaderOutProperties> {
  constructor(
    inputProperties?: AlertDialogHeaderProperties,
    initialClasses?: Array<InProperties<BaseOutProperties> | string>,
    config?: { renderContext?: RenderContext; defaultOverrides?: InProperties<AlertDialogHeaderOutProperties> },
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
