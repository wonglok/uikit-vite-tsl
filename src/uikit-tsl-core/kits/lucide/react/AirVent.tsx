
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AirVentIcon as VanillaAirVentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AirVentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAirVentIcon>
> = /*@__PURE__*/ build<VanillaAirVentIcon, SvgProperties>(VanillaAirVentIcon, "VanillaAirVentIcon")
export const AirVent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAirVentIcon>
> = AirVentIcon
    