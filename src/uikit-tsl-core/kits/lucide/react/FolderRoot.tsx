
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderRootIcon as VanillaFolderRootIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderRootIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderRootIcon>
> = /*@__PURE__*/ build<VanillaFolderRootIcon, SvgProperties>(VanillaFolderRootIcon)
export const FolderRoot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderRootIcon>
> = FolderRootIcon
    