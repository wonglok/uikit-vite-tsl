
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareChevronUpIcon as VanillaSquareChevronUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareChevronUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChevronUpIcon>
> = /*@__PURE__*/ build<VanillaSquareChevronUpIcon, SvgProperties>(VanillaSquareChevronUpIcon)
export const SquareChevronUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareChevronUpIcon>
> = SquareChevronUpIcon
    