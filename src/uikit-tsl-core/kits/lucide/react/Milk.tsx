
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MilkIcon as VanillaMilkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MilkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMilkIcon>
> = /*@__PURE__*/ build<VanillaMilkIcon, SvgProperties>(VanillaMilkIcon)
export const Milk: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMilkIcon>
> = MilkIcon
    