
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GemIcon as VanillaGemIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GemIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGemIcon>
> = /*@__PURE__*/ build<VanillaGemIcon, SvgProperties>(VanillaGemIcon, "VanillaGemIcon")
export const Gem: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGemIcon>
> = GemIcon
    