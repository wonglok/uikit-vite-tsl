
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinOffIcon as VanillaMapPinOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinOffIcon>
> = /*@__PURE__*/ build<VanillaMapPinOffIcon, SvgProperties>(VanillaMapPinOffIcon, "VanillaMapPinOffIcon")
export const MapPinOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinOffIcon>
> = MapPinOffIcon
    