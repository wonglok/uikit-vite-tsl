
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HourglassIcon as VanillaHourglassIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HourglassIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHourglassIcon>
> = /*@__PURE__*/ build<VanillaHourglassIcon, SvgProperties>(VanillaHourglassIcon, "VanillaHourglassIcon")
export const Hourglass: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHourglassIcon>
> = HourglassIcon
    