
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShirtIcon as VanillaShirtIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShirtIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShirtIcon>
> = /*@__PURE__*/ build<VanillaShirtIcon, SvgProperties>(VanillaShirtIcon, "VanillaShirtIcon")
export const Shirt: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShirtIcon>
> = ShirtIcon
    