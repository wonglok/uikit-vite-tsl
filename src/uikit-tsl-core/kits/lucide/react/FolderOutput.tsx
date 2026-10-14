
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderOutputIcon as VanillaFolderOutputIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderOutputIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderOutputIcon>
> = /*@__PURE__*/ build<VanillaFolderOutputIcon, SvgProperties>(VanillaFolderOutputIcon, "VanillaFolderOutputIcon")
export const FolderOutput: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderOutputIcon>
> = FolderOutputIcon
    