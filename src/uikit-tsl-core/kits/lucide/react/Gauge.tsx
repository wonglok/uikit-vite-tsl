
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GaugeIcon as VanillaGaugeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GaugeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGaugeIcon>
> = /*@__PURE__*/ build<VanillaGaugeIcon, SvgProperties>(VanillaGaugeIcon, "VanillaGaugeIcon")
export const Gauge: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGaugeIcon>
> = GaugeIcon
    