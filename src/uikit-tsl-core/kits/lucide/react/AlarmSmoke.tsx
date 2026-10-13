
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlarmSmokeIcon as VanillaAlarmSmokeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlarmSmokeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmSmokeIcon>
> = /*@__PURE__*/ build<VanillaAlarmSmokeIcon, SvgProperties>(VanillaAlarmSmokeIcon)
export const AlarmSmoke: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmSmokeIcon>
> = AlarmSmokeIcon
    