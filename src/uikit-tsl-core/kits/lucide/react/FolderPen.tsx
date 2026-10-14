
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderPenIcon as VanillaFolderPenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderPenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderPenIcon>
> = /*@__PURE__*/ build<VanillaFolderPenIcon, SvgProperties>(VanillaFolderPenIcon, "VanillaFolderPenIcon")
export const FolderPen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderPenIcon>
> = FolderPenIcon
    