
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitPullRequestArrowIcon as VanillaGitPullRequestArrowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitPullRequestArrowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestArrowIcon>
> = /*@__PURE__*/ build<VanillaGitPullRequestArrowIcon, SvgProperties>(VanillaGitPullRequestArrowIcon, "VanillaGitPullRequestArrowIcon")
export const GitPullRequestArrow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestArrowIcon>
> = GitPullRequestArrowIcon
    