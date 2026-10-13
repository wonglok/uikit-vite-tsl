
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleAlertIcon as VanillaCircleAlertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleAlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleAlertIcon>
> = /*@__PURE__*/ build<VanillaCircleAlertIcon, SvgProperties>(VanillaCircleAlertIcon)
export const CircleAlert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleAlertIcon>
> = CircleAlertIcon
    