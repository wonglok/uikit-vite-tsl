
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarCogIcon as VanillaCalendarCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarCogIcon>
> = /*@__PURE__*/ build<VanillaCalendarCogIcon, SvgProperties>(VanillaCalendarCogIcon, "VanillaCalendarCogIcon")
export const CalendarCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarCogIcon>
> = CalendarCogIcon
    