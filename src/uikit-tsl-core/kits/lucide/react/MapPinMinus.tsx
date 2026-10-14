
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MapPinMinusIcon as VanillaMapPinMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MapPinMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinMinusIcon>
> = /*@__PURE__*/ build<VanillaMapPinMinusIcon, SvgProperties>(VanillaMapPinMinusIcon, "VanillaMapPinMinusIcon")
export const MapPinMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMapPinMinusIcon>
> = MapPinMinusIcon
    