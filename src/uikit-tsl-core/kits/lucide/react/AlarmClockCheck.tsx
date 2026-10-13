
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlarmClockCheckIcon as VanillaAlarmClockCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlarmClockCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockCheckIcon>
> = /*@__PURE__*/ build<VanillaAlarmClockCheckIcon, SvgProperties>(VanillaAlarmClockCheckIcon)
export const AlarmClockCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockCheckIcon>
> = AlarmClockCheckIcon
    