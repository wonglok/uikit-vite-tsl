
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EggIcon as VanillaEggIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EggIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEggIcon>
> = /*@__PURE__*/ build<VanillaEggIcon, SvgProperties>(VanillaEggIcon)
export const Egg: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEggIcon>
> = EggIcon
    