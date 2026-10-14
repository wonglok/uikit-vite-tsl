
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RegexIcon as VanillaRegexIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RegexIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRegexIcon>
> = /*@__PURE__*/ build<VanillaRegexIcon, SvgProperties>(VanillaRegexIcon, "VanillaRegexIcon")
export const Regex: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRegexIcon>
> = RegexIcon
    