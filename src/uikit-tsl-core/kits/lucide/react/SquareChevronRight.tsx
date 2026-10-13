
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareChevronRightIcon as VanillaSquareChevronRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareChevronRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChevronRightIcon>
> = /*@__PURE__*/ build<VanillaSquareChevronRightIcon, SvgProperties>(VanillaSquareChevronRightIcon)
export const SquareChevronRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChevronRightIcon>
> = SquareChevronRightIcon
    