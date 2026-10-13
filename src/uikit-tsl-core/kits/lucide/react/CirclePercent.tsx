
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CirclePercentIcon as VanillaCirclePercentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CirclePercentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePercentIcon>
> = /*@__PURE__*/ build<VanillaCirclePercentIcon, SvgProperties>(VanillaCirclePercentIcon)
export const CirclePercent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePercentIcon>
> = CirclePercentIcon
    