
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HotelIcon as VanillaHotelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HotelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHotelIcon>
> = /*@__PURE__*/ build<VanillaHotelIcon, SvgProperties>(VanillaHotelIcon, "VanillaHotelIcon")
export const Hotel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHotelIcon>
> = HotelIcon
    