
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RatIcon as VanillaRatIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RatIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRatIcon>
> = /*@__PURE__*/ build<VanillaRatIcon, SvgProperties>(VanillaRatIcon)
export const Rat: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRatIcon>
> = RatIcon
    