
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorIcon as VanillaMonitorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorIcon>
> = /*@__PURE__*/ build<VanillaMonitorIcon, SvgProperties>(VanillaMonitorIcon, "VanillaMonitorIcon")
export const Monitor: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorIcon>
> = MonitorIcon
    