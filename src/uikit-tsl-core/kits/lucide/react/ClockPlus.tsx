
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClockPlusIcon as VanillaClockPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClockPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockPlusIcon>
> = /*@__PURE__*/ build<VanillaClockPlusIcon, SvgProperties>(VanillaClockPlusIcon, "VanillaClockPlusIcon")
export const ClockPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockPlusIcon>
> = ClockPlusIcon
    