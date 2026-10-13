
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinPlusIcon as VanillaMapPinPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinPlusIcon>
> = /*@__PURE__*/ build<VanillaMapPinPlusIcon, SvgProperties>(VanillaMapPinPlusIcon)
export const MapPinPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinPlusIcon>
> = MapPinPlusIcon
    