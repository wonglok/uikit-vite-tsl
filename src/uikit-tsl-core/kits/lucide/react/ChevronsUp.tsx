
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronsUpIcon as VanillaChevronsUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronsUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsUpIcon>
> = /*@__PURE__*/ build<VanillaChevronsUpIcon, SvgProperties>(VanillaChevronsUpIcon)
export const ChevronsUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronsUpIcon>
> = ChevronsUpIcon
    