
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BatteryFullIcon as VanillaBatteryFullIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BatteryFullIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryFullIcon>
> = /*@__PURE__*/ build<VanillaBatteryFullIcon, SvgProperties>(VanillaBatteryFullIcon)
export const BatteryFull: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBatteryFullIcon>
> = BatteryFullIcon
    