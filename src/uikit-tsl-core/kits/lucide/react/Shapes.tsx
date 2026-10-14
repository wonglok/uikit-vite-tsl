
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShapesIcon as VanillaShapesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShapesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShapesIcon>
> = /*@__PURE__*/ build<VanillaShapesIcon, SvgProperties>(VanillaShapesIcon, "VanillaShapesIcon")
export const Shapes: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShapesIcon>
> = ShapesIcon
    