
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldCheckIcon as VanillaShieldCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldCheckIcon>
> = /*@__PURE__*/ build<VanillaShieldCheckIcon, SvgProperties>(VanillaShieldCheckIcon, "VanillaShieldCheckIcon")
export const ShieldCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldCheckIcon>
> = ShieldCheckIcon
    