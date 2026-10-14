
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpDownIcon as VanillaArrowUpDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpDownIcon>
> = /*@__PURE__*/ build<VanillaArrowUpDownIcon, SvgProperties>(VanillaArrowUpDownIcon, "VanillaArrowUpDownIcon")
export const ArrowUpDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpDownIcon>
> = ArrowUpDownIcon
    