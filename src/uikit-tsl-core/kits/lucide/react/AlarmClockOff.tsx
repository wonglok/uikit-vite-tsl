
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlarmClockOffIcon as VanillaAlarmClockOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlarmClockOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockOffIcon>
> = /*@__PURE__*/ build<VanillaAlarmClockOffIcon, SvgProperties>(VanillaAlarmClockOffIcon, "VanillaAlarmClockOffIcon")
export const AlarmClockOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockOffIcon>
> = AlarmClockOffIcon
    