
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FuelIcon as VanillaFuelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FuelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFuelIcon>
> = /*@__PURE__*/ build<VanillaFuelIcon, SvgProperties>(VanillaFuelIcon, "VanillaFuelIcon")
export const Fuel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFuelIcon>
> = FuelIcon
    