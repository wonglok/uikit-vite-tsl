
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RouteOffIcon as VanillaRouteOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RouteOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRouteOffIcon>
> = /*@__PURE__*/ build<VanillaRouteOffIcon, SvgProperties>(VanillaRouteOffIcon, "VanillaRouteOffIcon")
export const RouteOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRouteOffIcon>
> = RouteOffIcon
    