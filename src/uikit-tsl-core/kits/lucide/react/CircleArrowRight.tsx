
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleArrowRightIcon as VanillaCircleArrowRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleArrowRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowRightIcon>
> = /*@__PURE__*/ build<VanillaCircleArrowRightIcon, SvgProperties>(VanillaCircleArrowRightIcon)
export const CircleArrowRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowRightIcon>
> = CircleArrowRightIcon
    