
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WifiOffIcon as VanillaWifiOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WifiOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiOffIcon>
> = /*@__PURE__*/ build<VanillaWifiOffIcon, SvgProperties>(VanillaWifiOffIcon, "VanillaWifiOffIcon")
export const WifiOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiOffIcon>
> = WifiOffIcon
    