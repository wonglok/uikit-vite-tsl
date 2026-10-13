
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MenuIcon as VanillaMenuIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MenuIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMenuIcon>
> = /*@__PURE__*/ build<VanillaMenuIcon, SvgProperties>(VanillaMenuIcon)
export const Menu: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMenuIcon>
> = MenuIcon
    