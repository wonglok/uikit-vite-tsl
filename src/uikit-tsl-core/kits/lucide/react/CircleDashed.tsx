
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleDashedIcon as VanillaCircleDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDashedIcon>
> = /*@__PURE__*/ build<VanillaCircleDashedIcon, SvgProperties>(VanillaCircleDashedIcon)
export const CircleDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDashedIcon>
> = CircleDashedIcon
    