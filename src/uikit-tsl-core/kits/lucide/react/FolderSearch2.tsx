
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderSearch2Icon as VanillaFolderSearch2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderSearch2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSearch2Icon>
> = /*@__PURE__*/ build<VanillaFolderSearch2Icon, SvgProperties>(VanillaFolderSearch2Icon)
export const FolderSearch2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderSearch2Icon>
> = FolderSearch2Icon
    