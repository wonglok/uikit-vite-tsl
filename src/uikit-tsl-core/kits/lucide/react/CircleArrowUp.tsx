
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleArrowUpIcon as VanillaCircleArrowUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleArrowUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowUpIcon>
> = /*@__PURE__*/ build<VanillaCircleArrowUpIcon, SvgProperties>(VanillaCircleArrowUpIcon)
export const CircleArrowUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowUpIcon>
> = CircleArrowUpIcon
    