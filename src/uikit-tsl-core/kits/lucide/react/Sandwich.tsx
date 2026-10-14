
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SandwichIcon as VanillaSandwichIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SandwichIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSandwichIcon>
> = /*@__PURE__*/ build<VanillaSandwichIcon, SvgProperties>(VanillaSandwichIcon, "VanillaSandwichIcon")
export const Sandwich: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSandwichIcon>
> = SandwichIcon
    