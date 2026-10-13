
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarSyncIcon as VanillaCalendarSyncIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarSyncIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarSyncIcon>
> = /*@__PURE__*/ build<VanillaCalendarSyncIcon, SvgProperties>(VanillaCalendarSyncIcon)
export const CalendarSync: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarSyncIcon>
> = CalendarSyncIcon
    