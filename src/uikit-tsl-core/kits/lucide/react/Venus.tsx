
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VenusIcon as VanillaVenusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VenusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVenusIcon>
> = /*@__PURE__*/ build<VanillaVenusIcon, SvgProperties>(VanillaVenusIcon)
export const Venus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVenusIcon>
> = VenusIcon
    