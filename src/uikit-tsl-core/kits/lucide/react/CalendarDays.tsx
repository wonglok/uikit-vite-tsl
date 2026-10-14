
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarDaysIcon as VanillaCalendarDaysIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarDaysIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarDaysIcon>
> = /*@__PURE__*/ build<VanillaCalendarDaysIcon, SvgProperties>(VanillaCalendarDaysIcon, "VanillaCalendarDaysIcon")
export const CalendarDays: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarDaysIcon>
> = CalendarDaysIcon
    