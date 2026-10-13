
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TabsTrigger as VanillaTabsTrigger, TabsTriggerProperties as VanillaTabsTriggerProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { TabsTrigger as VanillaTabsTrigger } from '../../core/index'

export type TabsTriggerProperties = VanillaTabsTriggerProperties & { children?: ReactNode } & ClassListProperties

export const TabsTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<TabsTriggerProperties> & RefAttributes<VanillaTabsTrigger>
> = /* @__PURE__ */ build<VanillaTabsTrigger, TabsTriggerProperties>(VanillaTabsTrigger, "VanillaDefaultTabsTrigger")
    