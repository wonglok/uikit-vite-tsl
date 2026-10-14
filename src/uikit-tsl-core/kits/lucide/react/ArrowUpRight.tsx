
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpRightIcon as VanillaArrowUpRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpRightIcon>
> = /*@__PURE__*/ build<VanillaArrowUpRightIcon, SvgProperties>(VanillaArrowUpRightIcon, "VanillaArrowUpRightIcon")
export const ArrowUpRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpRightIcon>
> = ArrowUpRightIcon
    