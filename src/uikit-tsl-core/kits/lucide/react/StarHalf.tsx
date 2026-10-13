
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StarHalfIcon as VanillaStarHalfIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StarHalfIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStarHalfIcon>
> = /*@__PURE__*/ build<VanillaStarHalfIcon, SvgProperties>(VanillaStarHalfIcon)
export const StarHalf: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStarHalfIcon>
> = StarHalfIcon
    