
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserMinusIcon as VanillaUserMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserMinusIcon>
> = /*@__PURE__*/ build<VanillaUserMinusIcon, SvgProperties>(VanillaUserMinusIcon, "VanillaUserMinusIcon")
export const UserMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserMinusIcon>
> = UserMinusIcon
    