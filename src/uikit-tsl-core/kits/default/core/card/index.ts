import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { BaseOutProperties, Container, InProperties } from '../../../../index'
import { borderRadius, colors, componentDefaults } from '../theme'
export const CardPropertiesSchema = ContainerPropertiesSchema

export type CardProperties = z.input<typeof CardPropertiesSchema>

export class Card extends Container<BaseOutProperties> {
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
        flexDirection: 'column',
        borderRadius: borderRadius.lg,
        borderWidth: 1,
        backgroundColor: colors.card,
        color: colors.cardForeground,
        ...config?.defaultOverrides,
      },
    })
  }
}

export * from './header'
export * from './title'
export * from './description'
export * from './content'
export * from './footer'
