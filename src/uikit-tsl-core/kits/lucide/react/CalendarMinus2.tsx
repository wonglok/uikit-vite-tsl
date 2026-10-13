
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarMinus2Icon as VanillaCalendarMinus2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarMinus2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarMinus2Icon>
> = /*@__PURE__*/ build<VanillaCalendarMinus2Icon, SvgProperties>(VanillaCalendarMinus2Icon)
export const CalendarMinus2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarMinus2Icon>
> = CalendarMinus2Icon
    