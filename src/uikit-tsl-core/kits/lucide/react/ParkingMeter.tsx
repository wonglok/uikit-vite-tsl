
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ParkingMeterIcon as VanillaParkingMeterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ParkingMeterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaParkingMeterIcon>
> = /*@__PURE__*/ build<VanillaParkingMeterIcon, SvgProperties>(VanillaParkingMeterIcon)
export const ParkingMeter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaParkingMeterIcon>
> = ParkingMeterIcon
    