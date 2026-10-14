
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleUserIcon as VanillaCircleUserIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleUserIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleUserIcon>
> = /*@__PURE__*/ build<VanillaCircleUserIcon, SvgProperties>(VanillaCircleUserIcon, "VanillaCircleUserIcon")
export const CircleUser: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleUserIcon>
> = CircleUserIcon
    