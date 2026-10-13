
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldUserIcon as VanillaShieldUserIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldUserIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldUserIcon>
> = /*@__PURE__*/ build<VanillaShieldUserIcon, SvgProperties>(VanillaShieldUserIcon)
export const ShieldUser: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldUserIcon>
> = ShieldUserIcon
    