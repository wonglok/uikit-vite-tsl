
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EqualNotIcon as VanillaEqualNotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EqualNotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEqualNotIcon>
> = /*@__PURE__*/ build<VanillaEqualNotIcon, SvgProperties>(VanillaEqualNotIcon, "VanillaEqualNotIcon")
export const EqualNot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEqualNotIcon>
> = EqualNotIcon
    