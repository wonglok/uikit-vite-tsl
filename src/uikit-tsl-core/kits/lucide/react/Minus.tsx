
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MinusIcon as VanillaMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMinusIcon>
> = /*@__PURE__*/ build<VanillaMinusIcon, SvgProperties>(VanillaMinusIcon)
export const Minus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMinusIcon>
> = MinusIcon
    