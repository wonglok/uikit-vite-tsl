
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MonitorSpeakerIcon as VanillaMonitorSpeakerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MonitorSpeakerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorSpeakerIcon>
> = /*@__PURE__*/ build<VanillaMonitorSpeakerIcon, SvgProperties>(VanillaMonitorSpeakerIcon)
export const MonitorSpeaker: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMonitorSpeakerIcon>
> = MonitorSpeakerIcon
    