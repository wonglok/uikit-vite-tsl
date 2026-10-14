
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlarmClockIcon as VanillaAlarmClockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlarmClockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockIcon>
> = /*@__PURE__*/ build<VanillaAlarmClockIcon, SvgProperties>(VanillaAlarmClockIcon, "VanillaAlarmClockIcon")
export const AlarmClock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockIcon>
> = AlarmClockIcon
    