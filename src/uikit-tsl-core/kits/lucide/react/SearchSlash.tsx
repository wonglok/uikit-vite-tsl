
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SearchSlashIcon as VanillaSearchSlashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SearchSlashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchSlashIcon>
> = /*@__PURE__*/ build<VanillaSearchSlashIcon, SvgProperties>(VanillaSearchSlashIcon)
export const SearchSlash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSearchSlashIcon>
> = SearchSlashIcon
    