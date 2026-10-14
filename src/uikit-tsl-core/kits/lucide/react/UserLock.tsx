
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UserLockIcon as VanillaUserLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UserLockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserLockIcon>
> = /*@__PURE__*/ build<VanillaUserLockIcon, SvgProperties>(VanillaUserLockIcon, "VanillaUserLockIcon")
export const UserLock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUserLockIcon>
> = UserLockIcon
    