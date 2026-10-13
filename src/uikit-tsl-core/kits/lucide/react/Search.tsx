
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SearchIcon as VanillaSearchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SearchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchIcon>
> = /*@__PURE__*/ build<VanillaSearchIcon, SvgProperties>(VanillaSearchIcon)
export const Search: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchIcon>
> = SearchIcon
    