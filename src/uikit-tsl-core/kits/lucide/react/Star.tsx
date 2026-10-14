
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StarIcon as VanillaStarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStarIcon>
> = /*@__PURE__*/ build<VanillaStarIcon, SvgProperties>(VanillaStarIcon, "VanillaStarIcon")
export const Star: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStarIcon>
> = StarIcon
    