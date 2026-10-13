
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CircleDollarSignIcon as VanillaCircleDollarSignIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CircleDollarSignIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDollarSignIcon>
> = /*@__PURE__*/ build<VanillaCircleDollarSignIcon, SvgProperties>(VanillaCircleDollarSignIcon)
export const CircleDollarSign: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCircleDollarSignIcon>
> = CircleDollarSignIcon
    