
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinHouseIcon as VanillaMapPinHouseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinHouseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinHouseIcon>
> = /*@__PURE__*/ build<VanillaMapPinHouseIcon, SvgProperties>(VanillaMapPinHouseIcon, "VanillaMapPinHouseIcon")
export const MapPinHouse: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinHouseIcon>
> = MapPinHouseIcon
    