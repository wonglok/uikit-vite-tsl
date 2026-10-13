
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderArchiveIcon as VanillaFolderArchiveIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderArchiveIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderArchiveIcon>
> = /*@__PURE__*/ build<VanillaFolderArchiveIcon, SvgProperties>(VanillaFolderArchiveIcon)
export const FolderArchive: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderArchiveIcon>
> = FolderArchiveIcon
    