
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderXIcon as VanillaFolderXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderXIcon>
> = /*@__PURE__*/ build<VanillaFolderXIcon, SvgProperties>(VanillaFolderXIcon)
export const FolderX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderXIcon>
> = FolderXIcon
    