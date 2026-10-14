
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarClockIcon as VanillaCalendarClockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarClockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarClockIcon>
> = /*@__PURE__*/ build<VanillaCalendarClockIcon, SvgProperties>(VanillaCalendarClockIcon, "VanillaCalendarClockIcon")
export const CalendarClock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarClockIcon>
> = CalendarClockIcon
    