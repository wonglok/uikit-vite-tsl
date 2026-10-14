
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpIcon as VanillaArrowUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpIcon>
> = /*@__PURE__*/ build<VanillaArrowUpIcon, SvgProperties>(VanillaArrowUpIcon, "VanillaArrowUpIcon")
export const ArrowUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpIcon>
> = ArrowUpIcon
    