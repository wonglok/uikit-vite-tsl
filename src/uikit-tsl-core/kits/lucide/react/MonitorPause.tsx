
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorPauseIcon as VanillaMonitorPauseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorPauseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorPauseIcon>
> = /*@__PURE__*/ build<VanillaMonitorPauseIcon, SvgProperties>(VanillaMonitorPauseIcon)
export const MonitorPause: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorPauseIcon>
> = MonitorPauseIcon
    