
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderOpenIcon as VanillaFolderOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderOpenIcon>
> = /*@__PURE__*/ build<VanillaFolderOpenIcon, SvgProperties>(VanillaFolderOpenIcon, "VanillaFolderOpenIcon")
export const FolderOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderOpenIcon>
> = FolderOpenIcon
    