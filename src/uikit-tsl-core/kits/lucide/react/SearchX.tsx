
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SearchXIcon as VanillaSearchXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SearchXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchXIcon>
> = /*@__PURE__*/ build<VanillaSearchXIcon, SvgProperties>(VanillaSearchXIcon)
export const SearchX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchXIcon>
> = SearchXIcon
    