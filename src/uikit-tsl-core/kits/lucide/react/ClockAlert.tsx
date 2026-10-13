
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ClockAlertIcon as VanillaClockAlertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ClockAlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockAlertIcon>
> = /*@__PURE__*/ build<VanillaClockAlertIcon, SvgProperties>(VanillaClockAlertIcon)
export const ClockAlert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaClockAlertIcon>
> = ClockAlertIcon
    