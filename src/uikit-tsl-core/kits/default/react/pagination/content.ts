
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationContent as VanillaPaginationContent, PaginationContentProperties as VanillaPaginationContentProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { PaginationContent as VanillaPaginationContent } from '../../core/index'

export type PaginationContentProperties = VanillaPaginationContentProperties & { children?: ReactNode } & ClassListProperties

export const PaginationContent: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationContentProperties> & RefAttributes<VanillaPaginationContent>
> = /* @__PURE__ */ build<VanillaPaginationContent, PaginationContentProperties>(VanillaPaginationContent, "VanillaDefaultPaginationContent")
    