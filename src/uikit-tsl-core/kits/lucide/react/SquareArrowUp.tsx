
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareArrowUpIcon as VanillaSquareArrowUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareArrowUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowUpIcon>
> = /*@__PURE__*/ build<VanillaSquareArrowUpIcon, SvgProperties>(VanillaSquareArrowUpIcon)
export const SquareArrowUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowUpIcon>
> = SquareArrowUpIcon
    