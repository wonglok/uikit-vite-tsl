
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AirplayIcon as VanillaAirplayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AirplayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAirplayIcon>
> = /*@__PURE__*/ build<VanillaAirplayIcon, SvgProperties>(VanillaAirplayIcon)
export const Airplay: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAirplayIcon>
> = AirplayIcon
    