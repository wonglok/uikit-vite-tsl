
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClockArrowUpIcon as VanillaClockArrowUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClockArrowUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockArrowUpIcon>
> = /*@__PURE__*/ build<VanillaClockArrowUpIcon, SvgProperties>(VanillaClockArrowUpIcon, "VanillaClockArrowUpIcon")
export const ClockArrowUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockArrowUpIcon>
> = ClockArrowUpIcon
    