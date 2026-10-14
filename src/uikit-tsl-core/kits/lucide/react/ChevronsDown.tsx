
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsDownIcon as VanillaChevronsDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsDownIcon>
> = /*@__PURE__*/ build<VanillaChevronsDownIcon, SvgProperties>(VanillaChevronsDownIcon, "VanillaChevronsDownIcon")
export const ChevronsDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsDownIcon>
> = ChevronsDownIcon
    