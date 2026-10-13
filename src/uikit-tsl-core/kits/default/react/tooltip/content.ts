
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TooltipContent as VanillaTooltipContent, TooltipContentProperties as VanillaTooltipContentProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { TooltipContent as VanillaTooltipContent } from '../../core/index'

export type TooltipContentProperties = VanillaTooltipContentProperties & { children?: ReactNode } & ClassListProperties

export const TooltipContent: ForwardRefExoticComponent<
  PropsWithoutRef<TooltipContentProperties> & RefAttributes<VanillaTooltipContent>
> = /* @__PURE__ */ build<VanillaTooltipContent, TooltipContentProperties>(VanillaTooltipContent, "VanillaDefaultTooltipContent")
    