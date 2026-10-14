
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ZoomInIcon as VanillaZoomInIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ZoomInIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZoomInIcon>
> = /*@__PURE__*/ build<VanillaZoomInIcon, SvgProperties>(VanillaZoomInIcon, "VanillaZoomInIcon")
export const ZoomIn: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZoomInIcon>
> = ZoomInIcon
    