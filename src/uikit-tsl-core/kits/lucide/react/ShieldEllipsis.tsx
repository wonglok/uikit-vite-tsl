
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShieldEllipsisIcon as VanillaShieldEllipsisIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShieldEllipsisIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldEllipsisIcon>
> = /*@__PURE__*/ build<VanillaShieldEllipsisIcon, SvgProperties>(VanillaShieldEllipsisIcon)
export const ShieldEllipsis: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShieldEllipsisIcon>
> = ShieldEllipsisIcon
    