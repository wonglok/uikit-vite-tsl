import type { z } from 'zod'
import { ContainerPropertiesSchema } from '../../../../index'
import { Container, InProperties, BaseOutProperties, WithSignal, RenderContext } from '../../../../index'
import { componentDefaults } from '../theme'
export const PaginationItemPropertiesSchema = ContainerPropertiesSchema

export type PaginationItemProperties = z.input<typeof PaginationItemPropertiesSchema>

export class PaginationItem extends Container<BaseOutProperties> {
  constructor(
    inputProperties?: InProperties<BaseOutProperties>,
    initialClasses?: Array<InProperties<BaseOutProperties> | string>,
    config?: {
      renderContext?: RenderContext
      defaultOverrides?: InProperties<BaseOutProperties>
      defaults?: WithSignal<BaseOutProperties>
    },
  ) {
    super(inputProperties, initialClasses, { defaults: componentDefaults, ...config })
  }
}
