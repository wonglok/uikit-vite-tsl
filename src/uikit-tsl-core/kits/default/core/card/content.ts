import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { BaseOutProperties, Container, InProperties } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const CardContentPropertiesSchema = ContainerPropertiesSchema

export type CardContentProperties = z.input<typeof CardContentPropertiesSchema>

export class CardContent extends Container<BaseOutProperties> {
  constructor(
    inputProperties?: InProperties<BaseOutProperties>,
    initialClasses?: Array<InProperties<BaseOutProperties> | string>,
    config?: { renderContext?: any; defaultOverrides?: InProperties<BaseOutProperties> },
  ) {
    super(inputProperties, initialClasses, {
      defaults: componentDefaults,
      ...config,
      defaultOverrides: {
        '*': {
          borderColor: colors.border,
        },
        padding: 24,
        paddingTop: 0,
        ...config?.defaultOverrides,
      },
    })
  }
}
