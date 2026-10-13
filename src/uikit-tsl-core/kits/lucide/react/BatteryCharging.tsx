
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BatteryChargingIcon as VanillaBatteryChargingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BatteryChargingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryChargingIcon>
> = /*@__PURE__*/ build<VanillaBatteryChargingIcon, SvgProperties>(VanillaBatteryChargingIcon)
export const BatteryCharging: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryChargingIcon>
> = BatteryChargingIcon
    