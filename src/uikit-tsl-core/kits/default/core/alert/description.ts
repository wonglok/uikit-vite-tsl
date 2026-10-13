import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { BaseOutProperties, Container, InProperties, RenderContext } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const AlertDescriptionPropertiesSchema = ContainerPropertiesSchema

export type AlertDescriptionProperties = z.input<typeof AlertDescriptionPropertiesSchema>

export class AlertDescription extends Container<BaseOutProperties> {
  constructor(
    inputProperties?: AlertDescriptionProperties,
    initialClasses?: Array<InProperties<BaseOutProperties> | string>,
    config?: { renderContext?: RenderContext; defaultOverrides?: InProperties<BaseOutProperties> },
  ) {
    super(inputProperties, initialClasses, {
      defaults: componentDefaults,
      ...config,
      defaultOverrides: {
        '*': {
          borderColor: colors.border,
        },
        paddingLeft: 28,
        lineHeight: '162.5%',
        fontSize: 14,
        opacity: 0.9,
        ...config?.defaultOverrides,
      },
    })
  }
}
