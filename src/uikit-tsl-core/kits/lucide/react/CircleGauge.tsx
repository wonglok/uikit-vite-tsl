
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleGaugeIcon as VanillaCircleGaugeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleGaugeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleGaugeIcon>
> = /*@__PURE__*/ build<VanillaCircleGaugeIcon, SvgProperties>(VanillaCircleGaugeIcon)
export const CircleGauge: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleGaugeIcon>
> = CircleGaugeIcon
    