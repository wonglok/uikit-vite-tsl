
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitMergeIcon as VanillaGitMergeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitMergeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitMergeIcon>
> = /*@__PURE__*/ build<VanillaGitMergeIcon, SvgProperties>(VanillaGitMergeIcon)
export const GitMerge: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitMergeIcon>
> = GitMergeIcon
    