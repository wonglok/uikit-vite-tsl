
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WifiZeroIcon as VanillaWifiZeroIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WifiZeroIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiZeroIcon>
> = /*@__PURE__*/ build<VanillaWifiZeroIcon, SvgProperties>(VanillaWifiZeroIcon)
export const WifiZero: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWifiZeroIcon>
> = WifiZeroIcon
    