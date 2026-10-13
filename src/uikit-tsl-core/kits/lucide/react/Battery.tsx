
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BatteryIcon as VanillaBatteryIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BatteryIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryIcon>
> = /*@__PURE__*/ build<VanillaBatteryIcon, SvgProperties>(VanillaBatteryIcon)
export const Battery: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryIcon>
> = BatteryIcon
    