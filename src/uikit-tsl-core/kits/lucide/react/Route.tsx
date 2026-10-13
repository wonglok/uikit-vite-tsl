
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RouteIcon as VanillaRouteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RouteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRouteIcon>
> = /*@__PURE__*/ build<VanillaRouteIcon, SvgProperties>(VanillaRouteIcon)
export const Route: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRouteIcon>
> = RouteIcon
    