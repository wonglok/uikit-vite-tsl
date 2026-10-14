
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GitCompareIcon as VanillaGitCompareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GitCompareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitCompareIcon>
> = /*@__PURE__*/ build<VanillaGitCompareIcon, SvgProperties>(VanillaGitCompareIcon, "VanillaGitCompareIcon")
export const GitCompare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGitCompareIcon>
> = GitCompareIcon
    