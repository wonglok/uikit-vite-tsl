
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LockOpenIcon as VanillaLockOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LockOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockOpenIcon>
> = /*@__PURE__*/ build<VanillaLockOpenIcon, SvgProperties>(VanillaLockOpenIcon)
export const LockOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockOpenIcon>
> = LockOpenIcon
    