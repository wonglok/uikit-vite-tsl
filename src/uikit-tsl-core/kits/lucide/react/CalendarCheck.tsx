
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarCheckIcon as VanillaCalendarCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarCheckIcon>
> = /*@__PURE__*/ build<VanillaCalendarCheckIcon, SvgProperties>(VanillaCalendarCheckIcon, "VanillaCalendarCheckIcon")
export const CalendarCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarCheckIcon>
> = CalendarCheckIcon
    