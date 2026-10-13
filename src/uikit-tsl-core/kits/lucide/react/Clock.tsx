
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClockIcon as VanillaClockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockIcon>
> = /*@__PURE__*/ build<VanillaClockIcon, SvgProperties>(VanillaClockIcon)
export const Clock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockIcon>
> = ClockIcon
    