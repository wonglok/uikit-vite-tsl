
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinXIcon as VanillaMapPinXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinXIcon>
> = /*@__PURE__*/ build<VanillaMapPinXIcon, SvgProperties>(VanillaMapPinXIcon, "VanillaMapPinXIcon")
export const MapPinX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinXIcon>
> = MapPinXIcon
    