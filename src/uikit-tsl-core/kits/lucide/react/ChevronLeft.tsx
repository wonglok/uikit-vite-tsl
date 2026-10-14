
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronLeftIcon as VanillaChevronLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronLeftIcon>
> = /*@__PURE__*/ build<VanillaChevronLeftIcon, SvgProperties>(VanillaChevronLeftIcon, "VanillaChevronLeftIcon")
export const ChevronLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronLeftIcon>
> = ChevronLeftIcon
    