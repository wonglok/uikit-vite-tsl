
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderDownIcon as VanillaFolderDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderDownIcon>
> = /*@__PURE__*/ build<VanillaFolderDownIcon, SvgProperties>(VanillaFolderDownIcon)
export const FolderDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderDownIcon>
> = FolderDownIcon
    