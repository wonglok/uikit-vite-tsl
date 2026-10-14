
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlarmClockPlusIcon as VanillaAlarmClockPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlarmClockPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockPlusIcon>
> = /*@__PURE__*/ build<VanillaAlarmClockPlusIcon, SvgProperties>(VanillaAlarmClockPlusIcon, "VanillaAlarmClockPlusIcon")
export const AlarmClockPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockPlusIcon>
> = AlarmClockPlusIcon
    