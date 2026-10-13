import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { BaseOutProperties, Container, InProperties } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const CardDescriptionPropertiesSchema = ContainerPropertiesSchema

export type CardDescriptionProperties = z.input<typeof CardDescriptionPropertiesSchema>

export class CardDescription extends Container<BaseOutProperties> {
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
        fontSize: 14,
        lineHeight: '20px',
        color: colors.mutedForeground,
        ...config?.defaultOverrides,
      },
    })
  }
}
