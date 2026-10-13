
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CurrencyIcon as VanillaCurrencyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CurrencyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCurrencyIcon>
> = /*@__PURE__*/ build<VanillaCurrencyIcon, SvgProperties>(VanillaCurrencyIcon)
export const Currency: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCurrencyIcon>
> = CurrencyIcon
    