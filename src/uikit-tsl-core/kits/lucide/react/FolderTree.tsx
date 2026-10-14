
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderTreeIcon as VanillaFolderTreeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderTreeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderTreeIcon>
> = /*@__PURE__*/ build<VanillaFolderTreeIcon, SvgProperties>(VanillaFolderTreeIcon, "VanillaFolderTreeIcon")
export const FolderTree: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderTreeIcon>
> = FolderTreeIcon
    