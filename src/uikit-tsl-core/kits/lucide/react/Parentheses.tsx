
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ParenthesesIcon as VanillaParenthesesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ParenthesesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaParenthesesIcon>
> = /*@__PURE__*/ build<VanillaParenthesesIcon, SvgProperties>(VanillaParenthesesIcon)
export const Parentheses: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaParenthesesIcon>
> = ParenthesesIcon
    