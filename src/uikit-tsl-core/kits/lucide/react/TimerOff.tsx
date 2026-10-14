
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TimerOffIcon as VanillaTimerOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TimerOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTimerOffIcon>
> = /*@__PURE__*/ build<VanillaTimerOffIcon, SvgProperties>(VanillaTimerOffIcon, "VanillaTimerOffIcon")
export const TimerOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTimerOffIcon>
> = TimerOffIcon
    