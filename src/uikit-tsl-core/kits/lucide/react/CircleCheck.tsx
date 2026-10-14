
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleCheckIcon as VanillaCircleCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleCheckIcon>
> = /*@__PURE__*/ build<VanillaCircleCheckIcon, SvgProperties>(VanillaCircleCheckIcon, "VanillaCircleCheckIcon")
export const CircleCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleCheckIcon>
> = CircleCheckIcon
    