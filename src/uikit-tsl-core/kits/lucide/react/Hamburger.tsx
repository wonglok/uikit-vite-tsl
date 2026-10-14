
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HamburgerIcon as VanillaHamburgerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HamburgerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHamburgerIcon>
> = /*@__PURE__*/ build<VanillaHamburgerIcon, SvgProperties>(VanillaHamburgerIcon, "VanillaHamburgerIcon")
export const Hamburger: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHamburgerIcon>
> = HamburgerIcon
    