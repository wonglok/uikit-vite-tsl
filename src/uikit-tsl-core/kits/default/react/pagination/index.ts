
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Pagination as VanillaPagination, PaginationProperties as VanillaPaginationProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Pagination as VanillaPagination } from '../../core/index'

export type PaginationProperties = VanillaPaginationProperties & { children?: ReactNode } & ClassListProperties

export const Pagination: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationProperties> & RefAttributes<VanillaPagination>
> = /* @__PURE__ */ build<VanillaPagination, PaginationProperties>(VanillaPagination, "VanillaDefaultPagination")
    
export * from "./content";export * from "./ellipsis";export * from "./item";export * from "./link";export * from "./next";export * from "./previous";