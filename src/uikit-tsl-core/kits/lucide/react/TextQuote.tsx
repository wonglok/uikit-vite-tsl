
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TextQuoteIcon as VanillaTextQuoteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TextQuoteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextQuoteIcon>
> = /*@__PURE__*/ build<VanillaTextQuoteIcon, SvgProperties>(VanillaTextQuoteIcon, "VanillaTextQuoteIcon")
export const TextQuote: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextQuoteIcon>
> = TextQuoteIcon
    