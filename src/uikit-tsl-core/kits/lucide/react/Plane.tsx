
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PlaneIcon as VanillaPlaneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PlaneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlaneIcon>
> = /*@__PURE__*/ build<VanillaPlaneIcon, SvgProperties>(VanillaPlaneIcon)
export const Plane: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlaneIcon>
> = PlaneIcon
    