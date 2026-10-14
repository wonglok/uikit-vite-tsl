
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CreditCardIcon as VanillaCreditCardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CreditCardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCreditCardIcon>
> = /*@__PURE__*/ build<VanillaCreditCardIcon, SvgProperties>(VanillaCreditCardIcon, "VanillaCreditCardIcon")
export const CreditCard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCreditCardIcon>
> = CreditCardIcon
    