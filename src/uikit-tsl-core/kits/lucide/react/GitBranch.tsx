
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitBranchIcon as VanillaGitBranchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitBranchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitBranchIcon>
> = /*@__PURE__*/ build<VanillaGitBranchIcon, SvgProperties>(VanillaGitBranchIcon)
export const GitBranch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitBranchIcon>
> = GitBranchIcon
    