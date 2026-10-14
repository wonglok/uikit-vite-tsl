
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronLastIcon as VanillaChevronLastIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronLastIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronLastIcon>
> = /*@__PURE__*/ build<VanillaChevronLastIcon, SvgProperties>(VanillaChevronLastIcon, "VanillaChevronLastIcon")
export const ChevronLast: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronLastIcon>
> = ChevronLastIcon
    