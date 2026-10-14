
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarOffIcon as VanillaCalendarOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarOffIcon>
> = /*@__PURE__*/ build<VanillaCalendarOffIcon, SvgProperties>(VanillaCalendarOffIcon, "VanillaCalendarOffIcon")
export const CalendarOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarOffIcon>
> = CalendarOffIcon
    