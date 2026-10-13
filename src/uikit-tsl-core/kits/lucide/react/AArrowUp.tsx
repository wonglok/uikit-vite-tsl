
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AArrowUpIcon as VanillaAArrowUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AArrowUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAArrowUpIcon>
> = /*@__PURE__*/ build<VanillaAArrowUpIcon, SvgProperties>(VanillaAArrowUpIcon)
export const AArrowUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAArrowUpIcon>
> = AArrowUpIcon
    