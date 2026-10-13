
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleXIcon as VanillaCircleXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleXIcon>
> = /*@__PURE__*/ build<VanillaCircleXIcon, SvgProperties>(VanillaCircleXIcon)
export const CircleX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleXIcon>
> = CircleXIcon
    