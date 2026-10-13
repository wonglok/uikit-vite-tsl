
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SlidersHorizontalIcon as VanillaSlidersHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SlidersHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlidersHorizontalIcon>
> = /*@__PURE__*/ build<VanillaSlidersHorizontalIcon, SvgProperties>(VanillaSlidersHorizontalIcon)
export const SlidersHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlidersHorizontalIcon>
> = SlidersHorizontalIcon
    