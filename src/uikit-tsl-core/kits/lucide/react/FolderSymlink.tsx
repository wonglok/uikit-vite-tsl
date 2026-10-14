
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderSymlinkIcon as VanillaFolderSymlinkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderSymlinkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSymlinkIcon>
> = /*@__PURE__*/ build<VanillaFolderSymlinkIcon, SvgProperties>(VanillaFolderSymlinkIcon, "VanillaFolderSymlinkIcon")
export const FolderSymlink: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSymlinkIcon>
> = FolderSymlinkIcon
    