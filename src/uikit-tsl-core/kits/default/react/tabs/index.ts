
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Tabs as VanillaTabs, TabsProperties as VanillaTabsProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Tabs as VanillaTabs } from '../../core/index'

export type TabsProperties = VanillaTabsProperties & { children?: ReactNode } & ClassListProperties

export const Tabs: ForwardRefExoticComponent<
  PropsWithoutRef<TabsProperties> & RefAttributes<VanillaTabs>
> = /* @__PURE__ */ build<VanillaTabs, TabsProperties>(VanillaTabs, "VanillaDefaultTabs")
    
export * from "./content";export * from "./list";export * from "./trigger";