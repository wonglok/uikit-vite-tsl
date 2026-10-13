
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderKeyIcon as VanillaFolderKeyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderKeyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderKeyIcon>
> = /*@__PURE__*/ build<VanillaFolderKeyIcon, SvgProperties>(VanillaFolderKeyIcon)
export const FolderKey: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderKeyIcon>
> = FolderKeyIcon
    