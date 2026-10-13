
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SunriseIcon as VanillaSunriseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SunriseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunriseIcon>
> = /*@__PURE__*/ build<VanillaSunriseIcon, SvgProperties>(VanillaSunriseIcon)
export const Sunrise: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunriseIcon>
> = SunriseIcon
    