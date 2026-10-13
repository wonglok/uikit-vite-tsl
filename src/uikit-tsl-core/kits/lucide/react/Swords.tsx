
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SwordsIcon as VanillaSwordsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SwordsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwordsIcon>
> = /*@__PURE__*/ build<VanillaSwordsIcon, SvgProperties>(VanillaSwordsIcon)
export const Swords: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSwordsIcon>
> = SwordsIcon
    