
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinCheckIcon as VanillaMapPinCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinCheckIcon>
> = /*@__PURE__*/ build<VanillaMapPinCheckIcon, SvgProperties>(VanillaMapPinCheckIcon, "VanillaMapPinCheckIcon")
export const MapPinCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinCheckIcon>
> = MapPinCheckIcon
    