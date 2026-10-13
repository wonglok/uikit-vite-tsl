
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsLeftRightIcon as VanillaChevronsLeftRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsLeftRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsLeftRightIcon>
> = /*@__PURE__*/ build<VanillaChevronsLeftRightIcon, SvgProperties>(VanillaChevronsLeftRightIcon)
export const ChevronsLeftRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsLeftRightIcon>
> = ChevronsLeftRightIcon
    