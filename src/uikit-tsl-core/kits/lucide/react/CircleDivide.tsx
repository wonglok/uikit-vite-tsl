
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleDivideIcon as VanillaCircleDivideIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleDivideIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDivideIcon>
> = /*@__PURE__*/ build<VanillaCircleDivideIcon, SvgProperties>(VanillaCircleDivideIcon)
export const CircleDivide: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDivideIcon>
> = CircleDivideIcon
    