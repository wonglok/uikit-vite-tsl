
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarRangeIcon as VanillaCalendarRangeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarRangeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarRangeIcon>
> = /*@__PURE__*/ build<VanillaCalendarRangeIcon, SvgProperties>(VanillaCalendarRangeIcon)
export const CalendarRange: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarRangeIcon>
> = CalendarRangeIcon
    