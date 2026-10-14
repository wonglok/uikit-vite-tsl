
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleEqualIcon as VanillaCircleEqualIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleEqualIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleEqualIcon>
> = /*@__PURE__*/ build<VanillaCircleEqualIcon, SvgProperties>(VanillaCircleEqualIcon, "VanillaCircleEqualIcon")
export const CircleEqual: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleEqualIcon>
> = CircleEqualIcon
    