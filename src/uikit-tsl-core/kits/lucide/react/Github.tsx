
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GithubIcon as VanillaGithubIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GithubIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGithubIcon>
> = /*@__PURE__*/ build<VanillaGithubIcon, SvgProperties>(VanillaGithubIcon, "VanillaGithubIcon")
export const Github: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGithubIcon>
> = GithubIcon
    