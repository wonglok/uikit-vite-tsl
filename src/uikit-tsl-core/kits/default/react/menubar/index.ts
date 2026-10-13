
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from 'react'
import { Menubar as VanillaMenubar, MenubarProperties as VanillaMenubarProperties } from '../../core/index'
import { build, ClassListProperties } from '../../../../react/index'

export { Menubar as VanillaMenubar } from '../../core/index'

export type MenubarProperties = VanillaMenubarProperties & { children?: ReactNode } & ClassListProperties

export const Menubar: ForwardRefExoticComponent<
  PropsWithoutRef<MenubarProperties> & RefAttributes<VanillaMenubar>
> = /* @__PURE__ */ build<VanillaMenubar, MenubarProperties>(VanillaMenubar, "VanillaDefaultMenubar")
    
export * from "./menu";export * from "./trigger";