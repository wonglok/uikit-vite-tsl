import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { BaseOutProperties, Container, InProperties, RenderContext } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const TooltipTriggerPropertiesSchema = ContainerPropertiesSchema

export type TooltipTriggerProperties = z.input<typeof TooltipTriggerPropertiesSchema>

export class TooltipTrigger extends Container<BaseOutProperties> {
  constructor(
    inputProperties?: TooltipTriggerProperties,
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
        alignSelf: 'stretch',
        ...config?.defaultOverrides,
      },
    })
  }
}
