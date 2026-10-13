
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ChevronRightIcon as VanillaChevronRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ChevronRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronRightIcon>
> = /*@__PURE__*/ build<VanillaChevronRightIcon, SvgProperties>(VanillaChevronRightIcon)
export const ChevronRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaChevronRightIcon>
> = ChevronRightIcon
    