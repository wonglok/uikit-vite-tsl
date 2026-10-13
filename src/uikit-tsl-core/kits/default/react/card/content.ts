
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { CardContent as VanillaCardContent, CardContentProperties as VanillaCardContentProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { CardContent as VanillaCardContent } from '../../core/index'

export type CardContentProperties = VanillaCardContentProperties & { children?: ReactNode } & ClassListProperties

export const CardContent: ForwardRefExoticComponent<
  PropsWithoutRef<CardContentProperties> & RefAttributes<VanillaCardContent>
> = /* @__PURE__ */ build<VanillaCardContent, CardContentProperties>(VanillaCardContent, "VanillaDefaultCardContent")
    