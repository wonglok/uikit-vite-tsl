
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TimerIcon as VanillaTimerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TimerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTimerIcon>
> = /*@__PURE__*/ build<VanillaTimerIcon, SvgProperties>(VanillaTimerIcon, "VanillaTimerIcon")
export const Timer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTimerIcon>
> = TimerIcon
    