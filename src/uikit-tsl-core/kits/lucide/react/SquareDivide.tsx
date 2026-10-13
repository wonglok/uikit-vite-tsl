
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareDivideIcon as VanillaSquareDivideIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareDivideIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDivideIcon>
> = /*@__PURE__*/ build<VanillaSquareDivideIcon, SvgProperties>(VanillaSquareDivideIcon)
export const SquareDivide: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDivideIcon>
> = SquareDivideIcon
    