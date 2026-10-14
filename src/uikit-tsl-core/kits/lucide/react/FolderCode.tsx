
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderCodeIcon as VanillaFolderCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderCodeIcon>
> = /*@__PURE__*/ build<VanillaFolderCodeIcon, SvgProperties>(VanillaFolderCodeIcon, "VanillaFolderCodeIcon")
export const FolderCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderCodeIcon>
> = FolderCodeIcon
    