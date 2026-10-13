import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { Container, InProperties, BaseOutProperties, RenderContext } from '../../../../index'
import { colors, componentDefaults } from '../theme'
export const PaginationPropertiesSchema = ContainerPropertiesSchema

export type PaginationProperties = z.input<typeof PaginationPropertiesSchema>

export class Pagination extends Container<BaseOutProperties> {
  constructor(
    inputProperties?: InProperties<BaseOutProperties>,
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
        marginX: 'auto',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        ...config?.defaultOverrides,
      },
    })
  }
}

export * from './content'
export * from './item'
export * from './link'
export * from './previous'
export * from './next'
export * from './ellipsis'
