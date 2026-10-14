
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookMinusIcon as VanillaBookMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookMinusIcon>
> = /*@__PURE__*/ build<VanillaBookMinusIcon, SvgProperties>(VanillaBookMinusIcon, "VanillaBookMinusIcon")
export const BookMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookMinusIcon>
> = BookMinusIcon
    