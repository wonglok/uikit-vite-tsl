
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldAlertIcon as VanillaShieldAlertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldAlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldAlertIcon>
> = /*@__PURE__*/ build<VanillaShieldAlertIcon, SvgProperties>(VanillaShieldAlertIcon)
export const ShieldAlert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldAlertIcon>
> = ShieldAlertIcon
    