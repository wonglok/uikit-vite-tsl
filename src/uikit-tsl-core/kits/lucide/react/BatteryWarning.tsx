
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BatteryWarningIcon as VanillaBatteryWarningIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BatteryWarningIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryWarningIcon>
> = /*@__PURE__*/ build<VanillaBatteryWarningIcon, SvgProperties>(VanillaBatteryWarningIcon, "VanillaBatteryWarningIcon")
export const BatteryWarning: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryWarningIcon>
> = BatteryWarningIcon
    