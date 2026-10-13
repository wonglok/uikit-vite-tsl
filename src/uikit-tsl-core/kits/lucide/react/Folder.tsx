
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderIcon as VanillaFolderIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderIcon>
> = /*@__PURE__*/ build<VanillaFolderIcon, SvgProperties>(VanillaFolderIcon)
export const Folder: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderIcon>
> = FolderIcon
    