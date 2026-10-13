
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RectangleEllipsisIcon as VanillaRectangleEllipsisIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RectangleEllipsisIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleEllipsisIcon>
> = /*@__PURE__*/ build<VanillaRectangleEllipsisIcon, SvgProperties>(VanillaRectangleEllipsisIcon)
export const RectangleEllipsis: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRectangleEllipsisIcon>
> = RectangleEllipsisIcon
    