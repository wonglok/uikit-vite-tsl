
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TriangleIcon as VanillaTriangleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TriangleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleIcon>
> = /*@__PURE__*/ build<VanillaTriangleIcon, SvgProperties>(VanillaTriangleIcon, "VanillaTriangleIcon")
export const Triangle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleIcon>
> = TriangleIcon
    