
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorCogIcon as VanillaMonitorCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorCogIcon>
> = /*@__PURE__*/ build<VanillaMonitorCogIcon, SvgProperties>(VanillaMonitorCogIcon)
export const MonitorCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorCogIcon>
> = MonitorCogIcon
    