
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { Axis3dIcon as VanillaAxis3dIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const Axis3dIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAxis3dIcon>
> = /*@__PURE__*/ build<VanillaAxis3dIcon, SvgProperties>(VanillaAxis3dIcon, "VanillaAxis3dIcon")
export const Axis3d: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAxis3dIcon>
> = Axis3dIcon
    