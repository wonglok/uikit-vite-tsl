
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Tooltip as VanillaTooltip, TooltipProperties as VanillaTooltipProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Tooltip as VanillaTooltip } from '../../core/index'

export type TooltipProperties = VanillaTooltipProperties & { children?: ReactNode } & ClassListProperties

export const Tooltip: ForwardRefExoticComponent<
  PropsWithoutRef<TooltipProperties> & RefAttributes<VanillaTooltip>
> = /* @__PURE__ */ build<VanillaTooltip, TooltipProperties>(VanillaTooltip, "VanillaDefaultTooltip")
    
export * from "./content";export * from "./trigger";