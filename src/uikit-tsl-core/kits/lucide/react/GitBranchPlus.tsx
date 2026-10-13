
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitBranchPlusIcon as VanillaGitBranchPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitBranchPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitBranchPlusIcon>
> = /*@__PURE__*/ build<VanillaGitBranchPlusIcon, SvgProperties>(VanillaGitBranchPlusIcon)
export const GitBranchPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitBranchPlusIcon>
> = GitBranchPlusIcon
    