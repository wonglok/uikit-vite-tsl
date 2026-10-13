
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinIcon as VanillaMapPinIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinIcon>
> = /*@__PURE__*/ build<VanillaMapPinIcon, SvgProperties>(VanillaMapPinIcon)
export const MapPin: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinIcon>
> = MapPinIcon
    