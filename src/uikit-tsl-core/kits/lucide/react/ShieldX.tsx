
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldXIcon as VanillaShieldXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldXIcon>
> = /*@__PURE__*/ build<VanillaShieldXIcon, SvgProperties>(VanillaShieldXIcon, "VanillaShieldXIcon")
export const ShieldX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldXIcon>
> = ShieldXIcon
    