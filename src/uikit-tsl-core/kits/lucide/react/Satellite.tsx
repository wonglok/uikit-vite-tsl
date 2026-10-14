
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SatelliteIcon as VanillaSatelliteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SatelliteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSatelliteIcon>
> = /*@__PURE__*/ build<VanillaSatelliteIcon, SvgProperties>(VanillaSatelliteIcon, "VanillaSatelliteIcon")
export const Satellite: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSatelliteIcon>
> = SatelliteIcon
    