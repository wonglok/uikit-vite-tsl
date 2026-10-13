
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PizzaIcon as VanillaPizzaIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PizzaIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPizzaIcon>
> = /*@__PURE__*/ build<VanillaPizzaIcon, SvgProperties>(VanillaPizzaIcon)
export const Pizza: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPizzaIcon>
> = PizzaIcon
    