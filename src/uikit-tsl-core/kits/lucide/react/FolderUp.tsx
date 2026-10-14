
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderUpIcon as VanillaFolderUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderUpIcon>
> = /*@__PURE__*/ build<VanillaFolderUpIcon, SvgProperties>(VanillaFolderUpIcon, "VanillaFolderUpIcon")
export const FolderUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderUpIcon>
> = FolderUpIcon
    