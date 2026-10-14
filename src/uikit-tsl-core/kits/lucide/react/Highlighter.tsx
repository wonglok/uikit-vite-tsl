
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HighlighterIcon as VanillaHighlighterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HighlighterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHighlighterIcon>
> = /*@__PURE__*/ build<VanillaHighlighterIcon, SvgProperties>(VanillaHighlighterIcon, "VanillaHighlighterIcon")
export const Highlighter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHighlighterIcon>
> = HighlighterIcon
    