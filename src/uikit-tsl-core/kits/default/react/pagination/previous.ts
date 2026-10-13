
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationPrevious as VanillaPaginationPrevious, PaginationPreviousProperties as VanillaPaginationPreviousProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { PaginationPrevious as VanillaPaginationPrevious } from '../../core/index'

export type PaginationPreviousProperties = VanillaPaginationPreviousProperties & ClassListProperties

export const PaginationPrevious: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationPreviousProperties> & RefAttributes<VanillaPaginationPrevious>
> = /* @__PURE__ */ build<VanillaPaginationPrevious, PaginationPreviousProperties>(VanillaPaginationPrevious, "VanillaDefaultPaginationPrevious")
    