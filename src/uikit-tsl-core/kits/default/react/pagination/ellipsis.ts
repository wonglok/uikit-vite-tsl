
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationEllipsis as VanillaPaginationEllipsis, PaginationEllipsisProperties as VanillaPaginationEllipsisProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { PaginationEllipsis as VanillaPaginationEllipsis } from '../../core/index'

export type PaginationEllipsisProperties = VanillaPaginationEllipsisProperties & ClassListProperties

export const PaginationEllipsis: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationEllipsisProperties> & RefAttributes<VanillaPaginationEllipsis>
> = /* @__PURE__ */ build<VanillaPaginationEllipsis, PaginationEllipsisProperties>(VanillaPaginationEllipsis, "VanillaDefaultPaginationEllipsis")
    