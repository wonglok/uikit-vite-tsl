
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldHalfIcon as VanillaShieldHalfIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldHalfIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldHalfIcon>
> = /*@__PURE__*/ build<VanillaShieldHalfIcon, SvgProperties>(VanillaShieldHalfIcon)
export const ShieldHalf: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldHalfIcon>
> = ShieldHalfIcon
    