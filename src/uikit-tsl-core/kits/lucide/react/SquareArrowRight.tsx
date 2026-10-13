
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareArrowRightIcon as VanillaSquareArrowRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareArrowRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowRightIcon>
> = /*@__PURE__*/ build<VanillaSquareArrowRightIcon, SvgProperties>(VanillaSquareArrowRightIcon)
export const SquareArrowRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowRightIcon>
> = SquareArrowRightIcon
    