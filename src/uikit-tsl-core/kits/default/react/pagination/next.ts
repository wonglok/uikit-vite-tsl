
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { PaginationNext as VanillaPaginationNext, PaginationNextProperties as VanillaPaginationNextProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { PaginationNext as VanillaPaginationNext } from '../../core/index'

export type PaginationNextProperties = VanillaPaginationNextProperties & ClassListProperties

export const PaginationNext: ForwardRefExoticComponent<
  PropsWithoutRef<PaginationNextProperties> & RefAttributes<VanillaPaginationNext>
> = /* @__PURE__ */ build<VanillaPaginationNext, PaginationNextProperties>(VanillaPaginationNext, "VanillaDefaultPaginationNext")
    