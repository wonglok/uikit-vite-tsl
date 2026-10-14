
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TriangleDashedIcon as VanillaTriangleDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TriangleDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleDashedIcon>
> = /*@__PURE__*/ build<VanillaTriangleDashedIcon, SvgProperties>(VanillaTriangleDashedIcon, "VanillaTriangleDashedIcon")
export const TriangleDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleDashedIcon>
> = TriangleDashedIcon
    