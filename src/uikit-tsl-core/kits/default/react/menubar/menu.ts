
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { MenubarMenu as VanillaMenubarMenu, MenubarMenuProperties as VanillaMenubarMenuProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { MenubarMenu as VanillaMenubarMenu } from '../../core/index'

export type MenubarMenuProperties = VanillaMenubarMenuProperties & { children?: ReactNode } & ClassListProperties

export const MenubarMenu: ForwardRefExoticComponent<
  PropsWithoutRef<MenubarMenuProperties> & RefAttributes<VanillaMenubarMenu>
> = /* @__PURE__ */ build<VanillaMenubarMenu, MenubarMenuProperties>(VanillaMenubarMenu, "VanillaDefaultMenubarMenu")
    