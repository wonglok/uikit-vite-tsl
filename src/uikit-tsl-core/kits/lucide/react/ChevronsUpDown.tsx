
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsUpDownIcon as VanillaChevronsUpDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsUpDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsUpDownIcon>
> = /*@__PURE__*/ build<VanillaChevronsUpDownIcon, SvgProperties>(VanillaChevronsUpDownIcon)
export const ChevronsUpDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsUpDownIcon>
> = ChevronsUpDownIcon
    