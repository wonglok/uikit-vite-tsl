
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinnedIcon as VanillaMapPinnedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinnedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinnedIcon>
> = /*@__PURE__*/ build<VanillaMapPinnedIcon, SvgProperties>(VanillaMapPinnedIcon)
export const MapPinned: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinnedIcon>
> = MapPinnedIcon
    