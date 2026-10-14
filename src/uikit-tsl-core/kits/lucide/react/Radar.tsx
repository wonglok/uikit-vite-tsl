
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RadarIcon as VanillaRadarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RadarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadarIcon>
> = /*@__PURE__*/ build<VanillaRadarIcon, SvgProperties>(VanillaRadarIcon, "VanillaRadarIcon")
export const Radar: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadarIcon>
> = RadarIcon
    