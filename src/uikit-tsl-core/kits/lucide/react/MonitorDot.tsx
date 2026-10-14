
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorDotIcon as VanillaMonitorDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorDotIcon>
> = /*@__PURE__*/ build<VanillaMonitorDotIcon, SvgProperties>(VanillaMonitorDotIcon, "VanillaMonitorDotIcon")
export const MonitorDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorDotIcon>
> = MonitorDotIcon
    