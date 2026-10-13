
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SlidersVerticalIcon as VanillaSlidersVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SlidersVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlidersVerticalIcon>
> = /*@__PURE__*/ build<VanillaSlidersVerticalIcon, SvgProperties>(VanillaSlidersVerticalIcon)
export const SlidersVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSlidersVerticalIcon>
> = SlidersVerticalIcon
    