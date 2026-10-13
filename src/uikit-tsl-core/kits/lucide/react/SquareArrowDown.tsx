
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareArrowDownIcon as VanillaSquareArrowDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareArrowDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowDownIcon>
> = /*@__PURE__*/ build<VanillaSquareArrowDownIcon, SvgProperties>(VanillaSquareArrowDownIcon)
export const SquareArrowDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowDownIcon>
> = SquareArrowDownIcon
    