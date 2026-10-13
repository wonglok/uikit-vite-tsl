
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FoldersIcon as VanillaFoldersIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FoldersIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFoldersIcon>
> = /*@__PURE__*/ build<VanillaFoldersIcon, SvgProperties>(VanillaFoldersIcon)
export const Folders: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFoldersIcon>
> = FoldersIcon
    