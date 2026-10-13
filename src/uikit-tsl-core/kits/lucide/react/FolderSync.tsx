
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderSyncIcon as VanillaFolderSyncIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderSyncIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSyncIcon>
> = /*@__PURE__*/ build<VanillaFolderSyncIcon, SvgProperties>(VanillaFolderSyncIcon)
export const FolderSync: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSyncIcon>
> = FolderSyncIcon
    