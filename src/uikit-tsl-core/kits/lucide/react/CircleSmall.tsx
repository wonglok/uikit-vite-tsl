
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleSmallIcon as VanillaCircleSmallIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleSmallIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleSmallIcon>
> = /*@__PURE__*/ build<VanillaCircleSmallIcon, SvgProperties>(VanillaCircleSmallIcon)
export const CircleSmall: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleSmallIcon>
> = CircleSmallIcon
    