
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LockKeyholeOpenIcon as VanillaLockKeyholeOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LockKeyholeOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockKeyholeOpenIcon>
> = /*@__PURE__*/ build<VanillaLockKeyholeOpenIcon, SvgProperties>(VanillaLockKeyholeOpenIcon)
export const LockKeyholeOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockKeyholeOpenIcon>
> = LockKeyholeOpenIcon
    