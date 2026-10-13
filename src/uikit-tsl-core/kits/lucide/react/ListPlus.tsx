
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListPlusIcon as VanillaListPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListPlusIcon>
> = /*@__PURE__*/ build<VanillaListPlusIcon, SvgProperties>(VanillaListPlusIcon)
export const ListPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListPlusIcon>
> = ListPlusIcon
    