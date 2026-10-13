
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClockFadingIcon as VanillaClockFadingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClockFadingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockFadingIcon>
> = /*@__PURE__*/ build<VanillaClockFadingIcon, SvgProperties>(VanillaClockFadingIcon)
export const ClockFading: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockFadingIcon>
> = ClockFadingIcon
    