
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WifiHighIcon as VanillaWifiHighIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WifiHighIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiHighIcon>
> = /*@__PURE__*/ build<VanillaWifiHighIcon, SvgProperties>(VanillaWifiHighIcon, "VanillaWifiHighIcon")
export const WifiHigh: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiHighIcon>
> = WifiHighIcon
    