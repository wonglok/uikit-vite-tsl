
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MouseIcon as VanillaMouseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MouseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMouseIcon>
> = /*@__PURE__*/ build<VanillaMouseIcon, SvgProperties>(VanillaMouseIcon)
export const Mouse: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMouseIcon>
> = MouseIcon
    