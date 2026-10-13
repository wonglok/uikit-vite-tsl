
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TextSearchIcon as VanillaTextSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TextSearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextSearchIcon>
> = /*@__PURE__*/ build<VanillaTextSearchIcon, SvgProperties>(VanillaTextSearchIcon)
export const TextSearch: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTextSearchIcon>
> = TextSearchIcon
    