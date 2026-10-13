
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListFilterPlusIcon as VanillaListFilterPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListFilterPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListFilterPlusIcon>
> = /*@__PURE__*/ build<VanillaListFilterPlusIcon, SvgProperties>(VanillaListFilterPlusIcon)
export const ListFilterPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListFilterPlusIcon>
> = ListFilterPlusIcon
    