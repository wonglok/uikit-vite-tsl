
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderKanbanIcon as VanillaFolderKanbanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderKanbanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderKanbanIcon>
> = /*@__PURE__*/ build<VanillaFolderKanbanIcon, SvgProperties>(VanillaFolderKanbanIcon)
export const FolderKanban: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderKanbanIcon>
> = FolderKanbanIcon
    