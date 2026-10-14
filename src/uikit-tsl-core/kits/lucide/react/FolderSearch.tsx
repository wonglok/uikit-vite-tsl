
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderSearchIcon as VanillaFolderSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSearchIcon>
> = /*@__PURE__*/ build<VanillaFolderSearchIcon, SvgProperties>(VanillaFolderSearchIcon, "VanillaFolderSearchIcon")
export const FolderSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSearchIcon>
> = FolderSearchIcon
    