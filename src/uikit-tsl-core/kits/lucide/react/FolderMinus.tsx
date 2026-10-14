
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderMinusIcon as VanillaFolderMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderMinusIcon>
> = /*@__PURE__*/ build<VanillaFolderMinusIcon, SvgProperties>(VanillaFolderMinusIcon, "VanillaFolderMinusIcon")
export const FolderMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderMinusIcon>
> = FolderMinusIcon
    