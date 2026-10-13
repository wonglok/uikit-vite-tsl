
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderGit2Icon as VanillaFolderGit2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderGit2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderGit2Icon>
> = /*@__PURE__*/ build<VanillaFolderGit2Icon, SvgProperties>(VanillaFolderGit2Icon)
export const FolderGit2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderGit2Icon>
> = FolderGit2Icon
    