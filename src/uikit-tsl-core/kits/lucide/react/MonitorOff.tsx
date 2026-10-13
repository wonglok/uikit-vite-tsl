
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorOffIcon as VanillaMonitorOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorOffIcon>
> = /*@__PURE__*/ build<VanillaMonitorOffIcon, SvgProperties>(VanillaMonitorOffIcon)
export const MonitorOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorOffIcon>
> = MonitorOffIcon
    