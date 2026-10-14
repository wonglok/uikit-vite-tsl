
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BellMinusIcon as VanillaBellMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BellMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellMinusIcon>
> = /*@__PURE__*/ build<VanillaBellMinusIcon, SvgProperties>(VanillaBellMinusIcon, "VanillaBellMinusIcon")
export const BellMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellMinusIcon>
> = BellMinusIcon
    