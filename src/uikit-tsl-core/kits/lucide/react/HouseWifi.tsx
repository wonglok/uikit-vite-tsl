
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HouseWifiIcon as VanillaHouseWifiIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HouseWifiIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHouseWifiIcon>
> = /*@__PURE__*/ build<VanillaHouseWifiIcon, SvgProperties>(VanillaHouseWifiIcon, "VanillaHouseWifiIcon")
export const HouseWifi: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHouseWifiIcon>
> = HouseWifiIcon
    