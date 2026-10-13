
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardFooter as VanillaCardFooter, CardFooterProperties as VanillaCardFooterProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { CardFooter as VanillaCardFooter } from '../../core/index'

export type CardFooterProperties = VanillaCardFooterProperties & { children?: ReactNode } & ClassListProperties

export const CardFooter: ForwardRefExoticComponent<
  PropsWithoutRef<CardFooterProperties> & RefAttributes<VanillaCardFooter>
> = /* @__PURE__ */ build<VanillaCardFooter, CardFooterProperties>(VanillaCardFooter, "VanillaDefaultCardFooter")
    