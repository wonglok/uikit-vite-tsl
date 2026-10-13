
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListFilterIcon as VanillaListFilterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListFilterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListFilterIcon>
> = /*@__PURE__*/ build<VanillaListFilterIcon, SvgProperties>(VanillaListFilterIcon)
export const ListFilter: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListFilterIcon>
> = ListFilterIcon
    