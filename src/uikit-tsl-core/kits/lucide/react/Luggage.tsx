
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LuggageIcon as VanillaLuggageIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LuggageIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLuggageIcon>
> = /*@__PURE__*/ build<VanillaLuggageIcon, SvgProperties>(VanillaLuggageIcon)
export const Luggage: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLuggageIcon>
> = LuggageIcon
    