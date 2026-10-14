
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderInputIcon as VanillaFolderInputIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderInputIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderInputIcon>
> = /*@__PURE__*/ build<VanillaFolderInputIcon, SvgProperties>(VanillaFolderInputIcon, "VanillaFolderInputIcon")
export const FolderInput: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderInputIcon>
> = FolderInputIcon
    