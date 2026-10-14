
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LockIcon as VanillaLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockIcon>
> = /*@__PURE__*/ build<VanillaLockIcon, SvgProperties>(VanillaLockIcon, "VanillaLockIcon")
export const Lock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLockIcon>
> = LockIcon
    