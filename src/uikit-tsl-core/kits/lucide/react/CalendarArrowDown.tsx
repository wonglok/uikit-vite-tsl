
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarArrowDownIcon as VanillaCalendarArrowDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarArrowDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarArrowDownIcon>
> = /*@__PURE__*/ build<VanillaCalendarArrowDownIcon, SvgProperties>(VanillaCalendarArrowDownIcon, "VanillaCalendarArrowDownIcon")
export const CalendarArrowDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarArrowDownIcon>
> = CalendarArrowDownIcon
    