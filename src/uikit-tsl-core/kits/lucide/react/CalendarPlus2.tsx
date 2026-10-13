
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CalendarPlus2Icon as VanillaCalendarPlus2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CalendarPlus2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarPlus2Icon>
> = /*@__PURE__*/ build<VanillaCalendarPlus2Icon, SvgProperties>(VanillaCalendarPlus2Icon)
export const CalendarPlus2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendarPlus2Icon>
> = CalendarPlus2Icon
    