
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorStopIcon as VanillaMonitorStopIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorStopIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorStopIcon>
> = /*@__PURE__*/ build<VanillaMonitorStopIcon, SvgProperties>(VanillaMonitorStopIcon, "VanillaMonitorStopIcon")
export const MonitorStop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorStopIcon>
> = MonitorStopIcon
    