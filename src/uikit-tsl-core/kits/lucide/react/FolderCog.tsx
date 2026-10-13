
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderCogIcon as VanillaFolderCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderCogIcon>
> = /*@__PURE__*/ build<VanillaFolderCogIcon, SvgProperties>(VanillaFolderCogIcon)
export const FolderCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderCogIcon>
> = FolderCogIcon
    