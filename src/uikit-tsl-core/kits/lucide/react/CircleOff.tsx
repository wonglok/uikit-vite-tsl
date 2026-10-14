
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleOffIcon as VanillaCircleOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleOffIcon>
> = /*@__PURE__*/ build<VanillaCircleOffIcon, SvgProperties>(VanillaCircleOffIcon, "VanillaCircleOffIcon")
export const CircleOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleOffIcon>
> = CircleOffIcon
    