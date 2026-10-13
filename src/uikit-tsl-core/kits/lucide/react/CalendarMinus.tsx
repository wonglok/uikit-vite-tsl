
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarMinusIcon as VanillaCalendarMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarMinusIcon>
> = /*@__PURE__*/ build<VanillaCalendarMinusIcon, SvgProperties>(VanillaCalendarMinusIcon)
export const CalendarMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarMinusIcon>
> = CalendarMinusIcon
    