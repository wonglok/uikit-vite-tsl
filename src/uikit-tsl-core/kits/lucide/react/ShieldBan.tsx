
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldBanIcon as VanillaShieldBanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldBanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldBanIcon>
> = /*@__PURE__*/ build<VanillaShieldBanIcon, SvgProperties>(VanillaShieldBanIcon, "VanillaShieldBanIcon")
export const ShieldBan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldBanIcon>
> = ShieldBanIcon
    