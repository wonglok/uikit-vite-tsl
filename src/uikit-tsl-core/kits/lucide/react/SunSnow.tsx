
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SunSnowIcon as VanillaSunSnowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SunSnowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunSnowIcon>
> = /*@__PURE__*/ build<VanillaSunSnowIcon, SvgProperties>(VanillaSunSnowIcon)
export const SunSnow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunSnowIcon>
> = SunSnowIcon
    