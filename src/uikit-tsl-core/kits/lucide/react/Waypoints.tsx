
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WaypointsIcon as VanillaWaypointsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WaypointsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWaypointsIcon>
> = /*@__PURE__*/ build<VanillaWaypointsIcon, SvgProperties>(VanillaWaypointsIcon)
export const Waypoints: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWaypointsIcon>
> = WaypointsIcon
    