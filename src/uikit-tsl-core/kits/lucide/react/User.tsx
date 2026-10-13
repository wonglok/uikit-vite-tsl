
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserIcon as VanillaUserIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserIcon>
> = /*@__PURE__*/ build<VanillaUserIcon, SvgProperties>(VanillaUserIcon)
export const User: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserIcon>
> = UserIcon
    