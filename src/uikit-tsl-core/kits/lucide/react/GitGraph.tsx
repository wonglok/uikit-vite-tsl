
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitGraphIcon as VanillaGitGraphIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitGraphIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitGraphIcon>
> = /*@__PURE__*/ build<VanillaGitGraphIcon, SvgProperties>(VanillaGitGraphIcon)
export const GitGraph: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitGraphIcon>
> = GitGraphIcon
    