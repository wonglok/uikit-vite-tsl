
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LockKeyholeIcon as VanillaLockKeyholeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LockKeyholeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockKeyholeIcon>
> = /*@__PURE__*/ build<VanillaLockKeyholeIcon, SvgProperties>(VanillaLockKeyholeIcon, "VanillaLockKeyholeIcon")
export const LockKeyhole: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockKeyholeIcon>
> = LockKeyholeIcon
    