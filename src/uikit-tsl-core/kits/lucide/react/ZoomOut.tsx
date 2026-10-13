
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ZoomOutIcon as VanillaZoomOutIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ZoomOutIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZoomOutIcon>
> = /*@__PURE__*/ build<VanillaZoomOutIcon, SvgProperties>(VanillaZoomOutIcon)
export const ZoomOut: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaZoomOutIcon>
> = ZoomOutIcon
    