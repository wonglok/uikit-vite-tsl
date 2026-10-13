
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderCheckIcon as VanillaFolderCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderCheckIcon>
> = /*@__PURE__*/ build<VanillaFolderCheckIcon, SvgProperties>(VanillaFolderCheckIcon)
export const FolderCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderCheckIcon>
> = FolderCheckIcon
    