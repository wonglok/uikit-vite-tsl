
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleArrowDownIcon as VanillaCircleArrowDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleArrowDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowDownIcon>
> = /*@__PURE__*/ build<VanillaCircleArrowDownIcon, SvgProperties>(VanillaCircleArrowDownIcon, "VanillaCircleArrowDownIcon")
export const CircleArrowDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleArrowDownIcon>
> = CircleArrowDownIcon
    