
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TriangleAlertIcon as VanillaTriangleAlertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TriangleAlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleAlertIcon>
> = /*@__PURE__*/ build<VanillaTriangleAlertIcon, SvgProperties>(VanillaTriangleAlertIcon, "VanillaTriangleAlertIcon")
export const TriangleAlert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleAlertIcon>
> = TriangleAlertIcon
    