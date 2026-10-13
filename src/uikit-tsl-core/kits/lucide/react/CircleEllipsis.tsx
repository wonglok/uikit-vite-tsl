
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleEllipsisIcon as VanillaCircleEllipsisIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleEllipsisIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleEllipsisIcon>
> = /*@__PURE__*/ build<VanillaCircleEllipsisIcon, SvgProperties>(VanillaCircleEllipsisIcon)
export const CircleEllipsis: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleEllipsisIcon>
> = CircleEllipsisIcon
    