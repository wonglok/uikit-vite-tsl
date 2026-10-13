
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShoppingCartIcon as VanillaShoppingCartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShoppingCartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShoppingCartIcon>
> = /*@__PURE__*/ build<VanillaShoppingCartIcon, SvgProperties>(VanillaShoppingCartIcon)
export const ShoppingCart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShoppingCartIcon>
> = ShoppingCartIcon
    