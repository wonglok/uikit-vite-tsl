
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BatteryMediumIcon as VanillaBatteryMediumIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BatteryMediumIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryMediumIcon>
> = /*@__PURE__*/ build<VanillaBatteryMediumIcon, SvgProperties>(VanillaBatteryMediumIcon)
export const BatteryMedium: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryMediumIcon>
> = BatteryMediumIcon
    