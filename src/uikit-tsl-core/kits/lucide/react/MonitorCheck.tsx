
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorCheckIcon as VanillaMonitorCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorCheckIcon>
> = /*@__PURE__*/ build<VanillaMonitorCheckIcon, SvgProperties>(VanillaMonitorCheckIcon)
export const MonitorCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorCheckIcon>
> = MonitorCheckIcon
    