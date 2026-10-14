
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BatteryPlusIcon as VanillaBatteryPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BatteryPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryPlusIcon>
> = /*@__PURE__*/ build<VanillaBatteryPlusIcon, SvgProperties>(VanillaBatteryPlusIcon, "VanillaBatteryPlusIcon")
export const BatteryPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryPlusIcon>
> = BatteryPlusIcon
    