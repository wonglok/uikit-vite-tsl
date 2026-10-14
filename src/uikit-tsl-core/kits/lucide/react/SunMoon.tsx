
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SunMoonIcon as VanillaSunMoonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SunMoonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunMoonIcon>
> = /*@__PURE__*/ build<VanillaSunMoonIcon, SvgProperties>(VanillaSunMoonIcon, "VanillaSunMoonIcon")
export const SunMoon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunMoonIcon>
> = SunMoonIcon
    