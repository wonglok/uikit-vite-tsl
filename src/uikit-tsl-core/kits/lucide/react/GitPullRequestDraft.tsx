
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitPullRequestDraftIcon as VanillaGitPullRequestDraftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitPullRequestDraftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestDraftIcon>
> = /*@__PURE__*/ build<VanillaGitPullRequestDraftIcon, SvgProperties>(VanillaGitPullRequestDraftIcon)
export const GitPullRequestDraft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitPullRequestDraftIcon>
> = GitPullRequestDraftIcon
    