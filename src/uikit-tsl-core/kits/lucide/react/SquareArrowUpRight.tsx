
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareArrowUpRightIcon as VanillaSquareArrowUpRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareArrowUpRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowUpRightIcon>
> = /*@__PURE__*/ build<VanillaSquareArrowUpRightIcon, SvgProperties>(VanillaSquareArrowUpRightIcon)
export const SquareArrowUpRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowUpRightIcon>
> = SquareArrowUpRightIcon
    