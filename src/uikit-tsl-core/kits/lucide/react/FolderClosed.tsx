
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderClosedIcon as VanillaFolderClosedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderClosedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderClosedIcon>
> = /*@__PURE__*/ build<VanillaFolderClosedIcon, SvgProperties>(VanillaFolderClosedIcon, "VanillaFolderClosedIcon")
export const FolderClosed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderClosedIcon>
> = FolderClosedIcon
    