
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorUpIcon as VanillaMonitorUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorUpIcon>
> = /*@__PURE__*/ build<VanillaMonitorUpIcon, SvgProperties>(VanillaMonitorUpIcon, "VanillaMonitorUpIcon")
export const MonitorUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorUpIcon>
> = MonitorUpIcon
    