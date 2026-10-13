
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorXIcon as VanillaMonitorXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorXIcon>
> = /*@__PURE__*/ build<VanillaMonitorXIcon, SvgProperties>(VanillaMonitorXIcon)
export const MonitorX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorXIcon>
> = MonitorXIcon
    