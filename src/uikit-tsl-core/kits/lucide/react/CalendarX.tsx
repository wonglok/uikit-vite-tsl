
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarXIcon as VanillaCalendarXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarXIcon>
> = /*@__PURE__*/ build<VanillaCalendarXIcon, SvgProperties>(VanillaCalendarXIcon)
export const CalendarX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarXIcon>
> = CalendarXIcon
    