
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WifiLowIcon as VanillaWifiLowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WifiLowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiLowIcon>
> = /*@__PURE__*/ build<VanillaWifiLowIcon, SvgProperties>(VanillaWifiLowIcon)
export const WifiLow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiLowIcon>
> = WifiLowIcon
    