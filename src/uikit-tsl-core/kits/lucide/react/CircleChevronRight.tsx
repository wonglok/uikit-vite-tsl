
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleChevronRightIcon as VanillaCircleChevronRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleChevronRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleChevronRightIcon>
> = /*@__PURE__*/ build<VanillaCircleChevronRightIcon, SvgProperties>(VanillaCircleChevronRightIcon)
export const CircleChevronRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleChevronRightIcon>
> = CircleChevronRightIcon
    