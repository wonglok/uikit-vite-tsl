
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleDotIcon as VanillaCircleDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDotIcon>
> = /*@__PURE__*/ build<VanillaCircleDotIcon, SvgProperties>(VanillaCircleDotIcon)
export const CircleDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDotIcon>
> = CircleDotIcon
    