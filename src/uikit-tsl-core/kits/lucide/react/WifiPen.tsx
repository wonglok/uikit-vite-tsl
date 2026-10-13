
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WifiPenIcon as VanillaWifiPenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WifiPenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiPenIcon>
> = /*@__PURE__*/ build<VanillaWifiPenIcon, SvgProperties>(VanillaWifiPenIcon)
export const WifiPen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiPenIcon>
> = WifiPenIcon
    