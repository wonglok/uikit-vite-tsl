
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeartPulseIcon as VanillaHeartPulseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeartPulseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartPulseIcon>
> = /*@__PURE__*/ build<VanillaHeartPulseIcon, SvgProperties>(VanillaHeartPulseIcon, "VanillaHeartPulseIcon")
export const HeartPulse: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartPulseIcon>
> = HeartPulseIcon
    