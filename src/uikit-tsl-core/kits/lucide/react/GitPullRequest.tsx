
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitPullRequestIcon as VanillaGitPullRequestIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitPullRequestIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestIcon>
> = /*@__PURE__*/ build<VanillaGitPullRequestIcon, SvgProperties>(VanillaGitPullRequestIcon, "VanillaGitPullRequestIcon")
export const GitPullRequest: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestIcon>
> = GitPullRequestIcon
    