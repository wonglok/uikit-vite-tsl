
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AArrowDownIcon as VanillaAArrowDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AArrowDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAArrowDownIcon>
> = /*@__PURE__*/ build<VanillaAArrowDownIcon, SvgProperties>(VanillaAArrowDownIcon, "VanillaAArrowDownIcon")
export const AArrowDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAArrowDownIcon>
> = AArrowDownIcon
    