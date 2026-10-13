
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarX2Icon as VanillaCalendarX2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarX2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarX2Icon>
> = /*@__PURE__*/ build<VanillaCalendarX2Icon, SvgProperties>(VanillaCalendarX2Icon)
export const CalendarX2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarX2Icon>
> = CalendarX2Icon
    