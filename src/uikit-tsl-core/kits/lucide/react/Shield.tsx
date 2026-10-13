
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldIcon as VanillaShieldIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldIcon>
> = /*@__PURE__*/ build<VanillaShieldIcon, SvgProperties>(VanillaShieldIcon)
export const Shield: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldIcon>
> = ShieldIcon
    