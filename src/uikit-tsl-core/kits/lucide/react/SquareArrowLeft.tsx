
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareArrowLeftIcon as VanillaSquareArrowLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareArrowLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowLeftIcon>
> = /*@__PURE__*/ build<VanillaSquareArrowLeftIcon, SvgProperties>(VanillaSquareArrowLeftIcon)
export const SquareArrowLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareArrowLeftIcon>
> = SquareArrowLeftIcon
    