
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ArrowUpFromDotIcon as VanillaArrowUpFromDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ArrowUpFromDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpFromDotIcon>
> = /*@__PURE__*/ build<VanillaArrowUpFromDotIcon, SvgProperties>(VanillaArrowUpFromDotIcon)
export const ArrowUpFromDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaArrowUpFromDotIcon>
> = ArrowUpFromDotIcon
    