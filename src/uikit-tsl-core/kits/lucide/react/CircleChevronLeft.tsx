
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleChevronLeftIcon as VanillaCircleChevronLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleChevronLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleChevronLeftIcon>
> = /*@__PURE__*/ build<VanillaCircleChevronLeftIcon, SvgProperties>(VanillaCircleChevronLeftIcon)
export const CircleChevronLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleChevronLeftIcon>
> = CircleChevronLeftIcon
    