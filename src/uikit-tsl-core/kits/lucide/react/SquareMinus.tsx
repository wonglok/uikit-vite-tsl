
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareMinusIcon as VanillaSquareMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMinusIcon>
> = /*@__PURE__*/ build<VanillaSquareMinusIcon, SvgProperties>(VanillaSquareMinusIcon)
export const SquareMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMinusIcon>
> = SquareMinusIcon
    