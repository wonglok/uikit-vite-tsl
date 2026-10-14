
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarPlusIcon as VanillaCalendarPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarPlusIcon>
> = /*@__PURE__*/ build<VanillaCalendarPlusIcon, SvgProperties>(VanillaCalendarPlusIcon, "VanillaCalendarPlusIcon")
export const CalendarPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarPlusIcon>
> = CalendarPlusIcon
    