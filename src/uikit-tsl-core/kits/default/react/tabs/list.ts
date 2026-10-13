
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TabsList as VanillaTabsList, TabsListProperties as VanillaTabsListProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { TabsList as VanillaTabsList } from '../../core/index'

export type TabsListProperties = VanillaTabsListProperties & { children?: ReactNode } & ClassListProperties

export const TabsList: ForwardRefExoticComponent<
  PropsWithoutRef<TabsListProperties> & RefAttributes<VanillaTabsList>
> = /* @__PURE__ */ build<VanillaTabsList, TabsListProperties>(VanillaTabsList, "VanillaDefaultTabsList")
    