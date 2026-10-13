
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldOffIcon as VanillaShieldOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldOffIcon>
> = /*@__PURE__*/ build<VanillaShieldOffIcon, SvgProperties>(VanillaShieldOffIcon)
export const ShieldOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldOffIcon>
> = ShieldOffIcon
    