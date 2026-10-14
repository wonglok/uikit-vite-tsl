
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapIcon as VanillaMapIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapIcon>
> = /*@__PURE__*/ build<VanillaMapIcon, SvgProperties>(VanillaMapIcon, "VanillaMapIcon")
export const Map: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapIcon>
> = MapIcon
    