
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { OctagonAlertIcon as VanillaOctagonAlertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const OctagonAlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonAlertIcon>
> = /*@__PURE__*/ build<VanillaOctagonAlertIcon, SvgProperties>(VanillaOctagonAlertIcon, "VanillaOctagonAlertIcon")
export const OctagonAlert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaOctagonAlertIcon>
> = OctagonAlertIcon
    