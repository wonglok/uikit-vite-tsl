
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VenusAndMarsIcon as VanillaVenusAndMarsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VenusAndMarsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVenusAndMarsIcon>
> = /*@__PURE__*/ build<VanillaVenusAndMarsIcon, SvgProperties>(VanillaVenusAndMarsIcon)
export const VenusAndMars: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVenusAndMarsIcon>
> = VenusAndMarsIcon
    