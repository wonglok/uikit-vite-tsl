
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarSearchIcon as VanillaCalendarSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarSearchIcon>
> = /*@__PURE__*/ build<VanillaCalendarSearchIcon, SvgProperties>(VanillaCalendarSearchIcon, "VanillaCalendarSearchIcon")
export const CalendarSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarSearchIcon>
> = CalendarSearchIcon
    