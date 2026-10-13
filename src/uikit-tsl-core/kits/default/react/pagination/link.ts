
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationLink as VanillaPaginationLink, PaginationLinkProperties as VanillaPaginationLinkProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { PaginationLink as VanillaPaginationLink } from '../../core/index'

export type PaginationLinkProperties = VanillaPaginationLinkProperties & { children?: ReactNode } & ClassListProperties

export const PaginationLink: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationLinkProperties> & RefAttributes<VanillaPaginationLink>
> = /* @__PURE__ */ build<VanillaPaginationLink, PaginationLinkProperties>(VanillaPaginationLink, "VanillaDefaultPaginationLink")
    