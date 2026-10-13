
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CirclePlayIcon as VanillaCirclePlayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CirclePlayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePlayIcon>
> = /*@__PURE__*/ build<VanillaCirclePlayIcon, SvgProperties>(VanillaCirclePlayIcon)
export const CirclePlay: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCirclePlayIcon>
> = CirclePlayIcon
    