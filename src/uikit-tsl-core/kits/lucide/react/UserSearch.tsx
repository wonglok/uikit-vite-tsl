
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserSearchIcon as VanillaUserSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserSearchIcon>
> = /*@__PURE__*/ build<VanillaUserSearchIcon, SvgProperties>(VanillaUserSearchIcon, "VanillaUserSearchIcon")
export const UserSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserSearchIcon>
> = UserSearchIcon
    