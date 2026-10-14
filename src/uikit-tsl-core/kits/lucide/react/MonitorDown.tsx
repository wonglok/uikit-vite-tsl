
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorDownIcon as VanillaMonitorDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorDownIcon>
> = /*@__PURE__*/ build<VanillaMonitorDownIcon, SvgProperties>(VanillaMonitorDownIcon, "VanillaMonitorDownIcon")
export const MonitorDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorDownIcon>
> = MonitorDownIcon
    