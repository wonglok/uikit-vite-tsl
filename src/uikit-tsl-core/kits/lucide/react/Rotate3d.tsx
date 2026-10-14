
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Rotate3dIcon as VanillaRotate3dIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Rotate3dIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotate3dIcon>
> = /*@__PURE__*/ build<VanillaRotate3dIcon, SvgProperties>(VanillaRotate3dIcon, "VanillaRotate3dIcon")
export const Rotate3d: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRotate3dIcon>
> = Rotate3dIcon
    