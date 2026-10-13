
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UsersIcon as VanillaUsersIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UsersIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUsersIcon>
> = /*@__PURE__*/ build<VanillaUsersIcon, SvgProperties>(VanillaUsersIcon)
export const Users: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUsersIcon>
> = UsersIcon
    