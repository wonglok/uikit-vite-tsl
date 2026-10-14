
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TriangleRightIcon as VanillaTriangleRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TriangleRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleRightIcon>
> = /*@__PURE__*/ build<VanillaTriangleRightIcon, SvgProperties>(VanillaTriangleRightIcon, "VanillaTriangleRightIcon")
export const TriangleRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTriangleRightIcon>
> = TriangleRightIcon
    