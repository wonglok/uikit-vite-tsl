
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderLockIcon as VanillaFolderLockIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderLockIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderLockIcon>
> = /*@__PURE__*/ build<VanillaFolderLockIcon, SvgProperties>(VanillaFolderLockIcon)
export const FolderLock: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderLockIcon>
> = FolderLockIcon
    