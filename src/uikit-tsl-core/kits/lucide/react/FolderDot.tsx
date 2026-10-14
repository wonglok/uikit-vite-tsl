
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderDotIcon as VanillaFolderDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderDotIcon>
> = /*@__PURE__*/ build<VanillaFolderDotIcon, SvgProperties>(VanillaFolderDotIcon, "VanillaFolderDotIcon")
export const FolderDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderDotIcon>
> = FolderDotIcon
    