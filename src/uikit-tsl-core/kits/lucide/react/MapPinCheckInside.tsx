
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinCheckInsideIcon as VanillaMapPinCheckInsideIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinCheckInsideIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinCheckInsideIcon>
> = /*@__PURE__*/ build<VanillaMapPinCheckInsideIcon, SvgProperties>(VanillaMapPinCheckInsideIcon)
export const MapPinCheckInside: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinCheckInsideIcon>
> = MapPinCheckInsideIcon
    