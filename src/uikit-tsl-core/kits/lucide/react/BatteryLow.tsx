
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BatteryLowIcon as VanillaBatteryLowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BatteryLowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryLowIcon>
> = /*@__PURE__*/ build<VanillaBatteryLowIcon, SvgProperties>(VanillaBatteryLowIcon, "VanillaBatteryLowIcon")
export const BatteryLow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryLowIcon>
> = BatteryLowIcon
    