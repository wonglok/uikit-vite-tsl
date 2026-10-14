
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarFoldIcon as VanillaCalendarFoldIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarFoldIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarFoldIcon>
> = /*@__PURE__*/ build<VanillaCalendarFoldIcon, SvgProperties>(VanillaCalendarFoldIcon, "VanillaCalendarFoldIcon")
export const CalendarFold: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarFoldIcon>
> = CalendarFoldIcon
    