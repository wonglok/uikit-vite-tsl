
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarIcon as VanillaCalendarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarIcon>
> = /*@__PURE__*/ build<VanillaCalendarIcon, SvgProperties>(VanillaCalendarIcon)
export const Calendar: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarIcon>
> = CalendarIcon
    