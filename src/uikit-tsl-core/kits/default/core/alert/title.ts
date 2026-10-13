import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { BaseOutProperties, Container, InProperties, RenderContext } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const AlertTitlePropertiesSchema = ContainerPropertiesSchema

export type AlertTitleProperties = z.input<typeof AlertTitlePropertiesSchema>

export class AlertTitle extends Container<BaseOutProperties> {
  constructor(
    inputProperties?: AlertTitleProperties,
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
        marginBottom: 4,
        padding: 0,
        paddingLeft: 28,
        fontWeight: 'medium',
        letterSpacing: -0.4,
        lineHeight: '100%',
        ...config?.defaultOverrides,
      },
    })
  }
}
