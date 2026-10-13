
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CoffeeIcon as VanillaCoffeeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CoffeeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCoffeeIcon>
> = /*@__PURE__*/ build<VanillaCoffeeIcon, SvgProperties>(VanillaCoffeeIcon)
export const Coffee: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCoffeeIcon>
> = CoffeeIcon
    