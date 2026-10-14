
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleStopIcon as VanillaCircleStopIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleStopIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleStopIcon>
> = /*@__PURE__*/ build<VanillaCircleStopIcon, SvgProperties>(VanillaCircleStopIcon, "VanillaCircleStopIcon")
export const CircleStop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleStopIcon>
> = CircleStopIcon
    