
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EllipsisIcon as VanillaEllipsisIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EllipsisIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEllipsisIcon>
> = /*@__PURE__*/ build<VanillaEllipsisIcon, SvgProperties>(VanillaEllipsisIcon, "VanillaEllipsisIcon")
export const Ellipsis: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEllipsisIcon>
> = EllipsisIcon
    