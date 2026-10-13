
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { QuoteIcon as VanillaQuoteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const QuoteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaQuoteIcon>
> = /*@__PURE__*/ build<VanillaQuoteIcon, SvgProperties>(VanillaQuoteIcon)
export const Quote: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaQuoteIcon>
> = QuoteIcon
    