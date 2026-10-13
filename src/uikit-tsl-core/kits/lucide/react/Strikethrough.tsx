
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { StrikethroughIcon as VanillaStrikethroughIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const StrikethroughIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStrikethroughIcon>
> = /*@__PURE__*/ build<VanillaStrikethroughIcon, SvgProperties>(VanillaStrikethroughIcon)
export const Strikethrough: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaStrikethroughIcon>
> = StrikethroughIcon
    