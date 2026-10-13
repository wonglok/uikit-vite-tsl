
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SearchCheckIcon as VanillaSearchCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SearchCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchCheckIcon>
> = /*@__PURE__*/ build<VanillaSearchCheckIcon, SvgProperties>(VanillaSearchCheckIcon)
export const SearchCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchCheckIcon>
> = SearchCheckIcon
    