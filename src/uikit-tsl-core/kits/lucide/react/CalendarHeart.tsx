
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarHeartIcon as VanillaCalendarHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarHeartIcon>
> = /*@__PURE__*/ build<VanillaCalendarHeartIcon, SvgProperties>(VanillaCalendarHeartIcon)
export const CalendarHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarHeartIcon>
> = CalendarHeartIcon
    