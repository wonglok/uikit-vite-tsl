
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SeparatorHorizontalIcon as VanillaSeparatorHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SeparatorHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSeparatorHorizontalIcon>
> = /*@__PURE__*/ build<VanillaSeparatorHorizontalIcon, SvgProperties>(VanillaSeparatorHorizontalIcon, "VanillaSeparatorHorizontalIcon")
export const SeparatorHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSeparatorHorizontalIcon>
> = SeparatorHorizontalIcon
    