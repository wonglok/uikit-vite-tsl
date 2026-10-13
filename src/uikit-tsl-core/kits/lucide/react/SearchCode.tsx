
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SearchCodeIcon as VanillaSearchCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SearchCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchCodeIcon>
> = /*@__PURE__*/ build<VanillaSearchCodeIcon, SvgProperties>(VanillaSearchCodeIcon)
export const SearchCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchCodeIcon>
> = SearchCodeIcon
    