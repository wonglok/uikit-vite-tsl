
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EclipseIcon as VanillaEclipseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EclipseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEclipseIcon>
> = /*@__PURE__*/ build<VanillaEclipseIcon, SvgProperties>(VanillaEclipseIcon)
export const Eclipse: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEclipseIcon>
> = EclipseIcon
    