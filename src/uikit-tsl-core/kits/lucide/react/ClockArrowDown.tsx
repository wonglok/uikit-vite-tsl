
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClockArrowDownIcon as VanillaClockArrowDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClockArrowDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockArrowDownIcon>
> = /*@__PURE__*/ build<VanillaClockArrowDownIcon, SvgProperties>(VanillaClockArrowDownIcon)
export const ClockArrowDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockArrowDownIcon>
> = ClockArrowDownIcon
    