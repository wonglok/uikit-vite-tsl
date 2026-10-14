
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FolderGitIcon as VanillaFolderGitIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FolderGitIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderGitIcon>
> = /*@__PURE__*/ build<VanillaFolderGitIcon, SvgProperties>(VanillaFolderGitIcon, "VanillaFolderGitIcon")
export const FolderGit: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFolderGitIcon>
> = FolderGitIcon
    