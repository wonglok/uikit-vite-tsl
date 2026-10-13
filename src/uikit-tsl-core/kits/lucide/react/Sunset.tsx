
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SunsetIcon as VanillaSunsetIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SunsetIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunsetIcon>
> = /*@__PURE__*/ build<VanillaSunsetIcon, SvgProperties>(VanillaSunsetIcon)
export const Sunset: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunsetIcon>
> = SunsetIcon
    