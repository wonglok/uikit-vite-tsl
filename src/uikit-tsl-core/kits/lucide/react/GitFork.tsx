
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitForkIcon as VanillaGitForkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitForkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitForkIcon>
> = /*@__PURE__*/ build<VanillaGitForkIcon, SvgProperties>(VanillaGitForkIcon, "VanillaGitForkIcon")
export const GitFork: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitForkIcon>
> = GitForkIcon
    