
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { MenubarTrigger as VanillaMenubarTrigger, MenubarTriggerProperties as VanillaMenubarTriggerProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { MenubarTrigger as VanillaMenubarTrigger } from '../../core/index'

export type MenubarTriggerProperties = VanillaMenubarTriggerProperties & { children?: ReactNode } & ClassListProperties

export const MenubarTrigger: ForwardRefExoticComponent<
  PropsWithoutRef<MenubarTriggerProperties> & RefAttributes<VanillaMenubarTrigger>
> = /* @__PURE__ */ build<VanillaMenubarTrigger, MenubarTriggerProperties>(VanillaMenubarTrigger, "VanillaDefaultMenubarTrigger")
    