
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CannabisIcon as VanillaCannabisIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CannabisIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCannabisIcon>
> = /*@__PURE__*/ build<VanillaCannabisIcon, SvgProperties>(VanillaCannabisIcon)
export const Cannabis: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCannabisIcon>
> = CannabisIcon
    