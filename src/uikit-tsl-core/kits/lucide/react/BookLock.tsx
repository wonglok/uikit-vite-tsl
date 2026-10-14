
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookLockIcon as VanillaBookLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookLockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookLockIcon>
> = /*@__PURE__*/ build<VanillaBookLockIcon, SvgProperties>(VanillaBookLockIcon, "VanillaBookLockIcon")
export const BookLock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookLockIcon>
> = BookLockIcon
    