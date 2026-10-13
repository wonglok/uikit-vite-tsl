
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationItem as VanillaPaginationItem, PaginationItemProperties as VanillaPaginationItemProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { PaginationItem as VanillaPaginationItem } from '../../core/index'

export type PaginationItemProperties = VanillaPaginationItemProperties & { children?: ReactNode } & ClassListProperties

export const PaginationItem: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationItemProperties> & RefAttributes<VanillaPaginationItem>
> = /* @__PURE__ */ build<VanillaPaginationItem, PaginationItemProperties>(VanillaPaginationItem, "VanillaDefaultPaginationItem")
    