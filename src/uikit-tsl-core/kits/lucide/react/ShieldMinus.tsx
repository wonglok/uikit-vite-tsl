
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldMinusIcon as VanillaShieldMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldMinusIcon>
> = /*@__PURE__*/ build<VanillaShieldMinusIcon, SvgProperties>(VanillaShieldMinusIcon)
export const ShieldMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldMinusIcon>
> = ShieldMinusIcon
    