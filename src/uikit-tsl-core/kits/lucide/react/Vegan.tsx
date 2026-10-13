
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VeganIcon as VanillaVeganIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VeganIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVeganIcon>
> = /*@__PURE__*/ build<VanillaVeganIcon, SvgProperties>(VanillaVeganIcon)
export const Vegan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVeganIcon>
> = VeganIcon
    