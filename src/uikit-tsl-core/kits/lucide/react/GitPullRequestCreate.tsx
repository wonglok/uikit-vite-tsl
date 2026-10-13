
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitPullRequestCreateIcon as VanillaGitPullRequestCreateIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitPullRequestCreateIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestCreateIcon>
> = /*@__PURE__*/ build<VanillaGitPullRequestCreateIcon, SvgProperties>(VanillaGitPullRequestCreateIcon)
export const GitPullRequestCreate: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestCreateIcon>
> = GitPullRequestCreateIcon
    