
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinPlusInsideIcon as VanillaMapPinPlusInsideIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinPlusInsideIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinPlusInsideIcon>
> = /*@__PURE__*/ build<VanillaMapPinPlusInsideIcon, SvgProperties>(VanillaMapPinPlusInsideIcon)
export const MapPinPlusInside: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinPlusInsideIcon>
> = MapPinPlusInsideIcon
    