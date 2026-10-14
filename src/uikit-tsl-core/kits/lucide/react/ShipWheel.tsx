
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShipWheelIcon as VanillaShipWheelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShipWheelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShipWheelIcon>
> = /*@__PURE__*/ build<VanillaShipWheelIcon, SvgProperties>(VanillaShipWheelIcon, "VanillaShipWheelIcon")
export const ShipWheel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShipWheelIcon>
> = ShipWheelIcon
    