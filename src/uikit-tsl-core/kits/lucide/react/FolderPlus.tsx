
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderPlusIcon as VanillaFolderPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderPlusIcon>
> = /*@__PURE__*/ build<VanillaFolderPlusIcon, SvgProperties>(VanillaFolderPlusIcon, "VanillaFolderPlusIcon")
export const FolderPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderPlusIcon>
> = FolderPlusIcon
    