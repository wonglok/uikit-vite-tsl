
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorPlayIcon as VanillaMonitorPlayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorPlayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorPlayIcon>
> = /*@__PURE__*/ build<VanillaMonitorPlayIcon, SvgProperties>(VanillaMonitorPlayIcon, "VanillaMonitorPlayIcon")
export const MonitorPlay: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorPlayIcon>
> = MonitorPlayIcon
    