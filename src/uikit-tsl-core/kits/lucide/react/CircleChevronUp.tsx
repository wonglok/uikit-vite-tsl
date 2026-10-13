
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleChevronUpIcon as VanillaCircleChevronUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleChevronUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleChevronUpIcon>
> = /*@__PURE__*/ build<VanillaCircleChevronUpIcon, SvgProperties>(VanillaCircleChevronUpIcon)
export const CircleChevronUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleChevronUpIcon>
> = CircleChevronUpIcon
    