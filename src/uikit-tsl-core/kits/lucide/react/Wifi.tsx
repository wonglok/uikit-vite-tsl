
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WifiIcon as VanillaWifiIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WifiIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiIcon>
> = /*@__PURE__*/ build<VanillaWifiIcon, SvgProperties>(VanillaWifiIcon, "VanillaWifiIcon")
export const Wifi: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiIcon>
> = WifiIcon
    