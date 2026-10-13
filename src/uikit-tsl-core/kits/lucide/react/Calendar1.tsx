
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Calendar1Icon as VanillaCalendar1Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Calendar1Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendar1Icon>
> = /*@__PURE__*/ build<VanillaCalendar1Icon, SvgProperties>(VanillaCalendar1Icon)
export const Calendar1: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCalendar1Icon>
> = Calendar1Icon
    