
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsLeftIcon as VanillaChevronsLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsLeftIcon>
> = /*@__PURE__*/ build<VanillaChevronsLeftIcon, SvgProperties>(VanillaChevronsLeftIcon, "VanillaChevronsLeftIcon")
export const ChevronsLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsLeftIcon>
> = ChevronsLeftIcon
    