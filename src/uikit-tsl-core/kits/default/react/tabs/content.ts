
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { TabsContent as VanillaTabsContent, TabsContentProperties as VanillaTabsContentProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { TabsContent as VanillaTabsContent } from '../../core/index'

export type TabsContentProperties = VanillaTabsContentProperties & { children?: ReactNode } & ClassListProperties

export const TabsContent: ForwardRefExoticComponent<
  PropsWithoutRef<TabsContentProperties> & RefAttributes<VanillaTabsContent>
> = /* @__PURE__ */ build<VanillaTabsContent, TabsContentProperties>(VanillaTabsContent, "VanillaDefaultTabsContent")
    