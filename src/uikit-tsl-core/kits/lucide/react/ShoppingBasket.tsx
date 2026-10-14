
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShoppingBasketIcon as VanillaShoppingBasketIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShoppingBasketIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShoppingBasketIcon>
> = /*@__PURE__*/ build<VanillaShoppingBasketIcon, SvgProperties>(VanillaShoppingBasketIcon, "VanillaShoppingBasketIcon")
export const ShoppingBasket: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShoppingBasketIcon>
> = ShoppingBasketIcon
    