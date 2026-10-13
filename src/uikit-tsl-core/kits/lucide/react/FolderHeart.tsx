
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderHeartIcon as VanillaFolderHeartIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderHeartIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderHeartIcon>
> = /*@__PURE__*/ build<VanillaFolderHeartIcon, SvgProperties>(VanillaFolderHeartIcon)
export const FolderHeart: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderHeartIcon>
> = FolderHeartIcon
    