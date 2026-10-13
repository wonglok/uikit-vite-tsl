
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleMinusIcon as VanillaCircleMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleMinusIcon>
> = /*@__PURE__*/ build<VanillaCircleMinusIcon, SvgProperties>(VanillaCircleMinusIcon)
export const CircleMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleMinusIcon>
> = CircleMinusIcon
    