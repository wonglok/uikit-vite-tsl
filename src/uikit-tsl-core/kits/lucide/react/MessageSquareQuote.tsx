
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MessageSquareQuoteIcon as VanillaMessageSquareQuoteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MessageSquareQuoteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareQuoteIcon>
> = /*@__PURE__*/ build<VanillaMessageSquareQuoteIcon, SvgProperties>(VanillaMessageSquareQuoteIcon, "VanillaMessageSquareQuoteIcon")
export const MessageSquareQuote: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMessageSquareQuoteIcon>
> = MessageSquareQuoteIcon
    