
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareChevronDownIcon as VanillaSquareChevronDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareChevronDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChevronDownIcon>
> = /*@__PURE__*/ build<VanillaSquareChevronDownIcon, SvgProperties>(VanillaSquareChevronDownIcon)
export const SquareChevronDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChevronDownIcon>
> = SquareChevronDownIcon
    