
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TimerResetIcon as VanillaTimerResetIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TimerResetIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTimerResetIcon>
> = /*@__PURE__*/ build<VanillaTimerResetIcon, SvgProperties>(VanillaTimerResetIcon)
export const TimerReset: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTimerResetIcon>
> = TimerResetIcon
    