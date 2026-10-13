
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SunMediumIcon as VanillaSunMediumIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SunMediumIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunMediumIcon>
> = /*@__PURE__*/ build<VanillaSunMediumIcon, SvgProperties>(VanillaSunMediumIcon)
export const SunMedium: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunMediumIcon>
> = SunMediumIcon
    