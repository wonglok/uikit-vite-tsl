
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleCheckBigIcon as VanillaCircleCheckBigIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleCheckBigIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleCheckBigIcon>
> = /*@__PURE__*/ build<VanillaCircleCheckBigIcon, SvgProperties>(VanillaCircleCheckBigIcon)
export const CircleCheckBig: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleCheckBigIcon>
> = CircleCheckBigIcon
    