
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListMinusIcon as VanillaListMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListMinusIcon>
> = /*@__PURE__*/ build<VanillaListMinusIcon, SvgProperties>(VanillaListMinusIcon)
export const ListMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListMinusIcon>
> = ListMinusIcon
    