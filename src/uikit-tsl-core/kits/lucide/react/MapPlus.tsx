
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPlusIcon as VanillaMapPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPlusIcon>
> = /*@__PURE__*/ build<VanillaMapPlusIcon, SvgProperties>(VanillaMapPlusIcon)
export const MapPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPlusIcon>
> = MapPlusIcon
    