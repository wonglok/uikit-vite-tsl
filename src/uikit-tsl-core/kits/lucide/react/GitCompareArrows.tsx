
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitCompareArrowsIcon as VanillaGitCompareArrowsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitCompareArrowsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitCompareArrowsIcon>
> = /*@__PURE__*/ build<VanillaGitCompareArrowsIcon, SvgProperties>(VanillaGitCompareArrowsIcon, "VanillaGitCompareArrowsIcon")
export const GitCompareArrows: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitCompareArrowsIcon>
> = GitCompareArrowsIcon
    