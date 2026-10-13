
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShovelIcon as VanillaShovelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShovelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShovelIcon>
> = /*@__PURE__*/ build<VanillaShovelIcon, SvgProperties>(VanillaShovelIcon)
export const Shovel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShovelIcon>
> = ShovelIcon
    