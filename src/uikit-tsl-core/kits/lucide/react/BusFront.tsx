
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BusFrontIcon as VanillaBusFrontIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BusFrontIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBusFrontIcon>
> = /*@__PURE__*/ build<VanillaBusFrontIcon, SvgProperties>(VanillaBusFrontIcon)
export const BusFront: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBusFrontIcon>
> = BusFrontIcon
    