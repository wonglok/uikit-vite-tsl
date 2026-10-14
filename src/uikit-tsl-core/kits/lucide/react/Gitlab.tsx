
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitlabIcon as VanillaGitlabIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitlabIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitlabIcon>
> = /*@__PURE__*/ build<VanillaGitlabIcon, SvgProperties>(VanillaGitlabIcon, "VanillaGitlabIcon")
export const Gitlab: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitlabIcon>
> = GitlabIcon
    