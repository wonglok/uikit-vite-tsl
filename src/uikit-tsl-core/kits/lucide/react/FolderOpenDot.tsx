
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderOpenDotIcon as VanillaFolderOpenDotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderOpenDotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderOpenDotIcon>
> = /*@__PURE__*/ build<VanillaFolderOpenDotIcon, SvgProperties>(VanillaFolderOpenDotIcon)
export const FolderOpenDot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderOpenDotIcon>
> = FolderOpenDotIcon
    