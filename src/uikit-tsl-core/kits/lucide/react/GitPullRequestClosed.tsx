
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitPullRequestClosedIcon as VanillaGitPullRequestClosedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitPullRequestClosedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestClosedIcon>
> = /*@__PURE__*/ build<VanillaGitPullRequestClosedIcon, SvgProperties>(VanillaGitPullRequestClosedIcon)
export const GitPullRequestClosed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestClosedIcon>
> = GitPullRequestClosedIcon
    