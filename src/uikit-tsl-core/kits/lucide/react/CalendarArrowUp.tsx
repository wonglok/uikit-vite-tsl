
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarArrowUpIcon as VanillaCalendarArrowUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarArrowUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarArrowUpIcon>
> = /*@__PURE__*/ build<VanillaCalendarArrowUpIcon, SvgProperties>(VanillaCalendarArrowUpIcon)
export const CalendarArrowUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarArrowUpIcon>
> = CalendarArrowUpIcon
    