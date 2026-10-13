
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TooltipTrigger as VanillaTooltipTrigger, TooltipTriggerProperties as VanillaTooltipTriggerProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { TooltipTrigger as VanillaTooltipTrigger } from '../../core/index'

export type TooltipTriggerProperties = VanillaTooltipTriggerProperties & { children?: ReactNode } & ClassListProperties

export const TooltipTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<TooltipTriggerProperties> & RefAttributes<VanillaTooltipTrigger>
> = /* @__PURE__ */ build<VanillaTooltipTrigger, TooltipTriggerProperties>(VanillaTooltipTrigger, "VanillaDefaultTooltipTrigger")
    