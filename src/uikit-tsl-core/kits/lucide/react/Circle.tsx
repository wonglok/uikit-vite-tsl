
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleIcon as VanillaCircleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleIcon>
> = /*@__PURE__*/ build<VanillaCircleIcon, SvgProperties>(VanillaCircleIcon, "VanillaCircleIcon")
export const Circle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleIcon>
> = CircleIcon
    