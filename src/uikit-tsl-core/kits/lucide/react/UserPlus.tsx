
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserPlusIcon as VanillaUserPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserPlusIcon>
> = /*@__PURE__*/ build<VanillaUserPlusIcon, SvgProperties>(VanillaUserPlusIcon)
export const UserPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserPlusIcon>
> = UserPlusIcon
    