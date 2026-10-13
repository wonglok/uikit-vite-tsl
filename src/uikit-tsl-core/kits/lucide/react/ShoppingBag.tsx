
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShoppingBagIcon as VanillaShoppingBagIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShoppingBagIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShoppingBagIcon>
> = /*@__PURE__*/ build<VanillaShoppingBagIcon, SvgProperties>(VanillaShoppingBagIcon)
export const ShoppingBag: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShoppingBagIcon>
> = ShoppingBagIcon
    