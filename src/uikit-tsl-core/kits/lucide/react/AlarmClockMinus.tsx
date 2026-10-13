
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlarmClockMinusIcon as VanillaAlarmClockMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlarmClockMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockMinusIcon>
> = /*@__PURE__*/ build<VanillaAlarmClockMinusIcon, SvgProperties>(VanillaAlarmClockMinusIcon)
export const AlarmClockMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlarmClockMinusIcon>
> = AlarmClockMinusIcon
    