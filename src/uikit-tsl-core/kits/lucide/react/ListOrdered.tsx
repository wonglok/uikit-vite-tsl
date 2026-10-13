
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListOrderedIcon as VanillaListOrderedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListOrderedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListOrderedIcon>
> = /*@__PURE__*/ build<VanillaListOrderedIcon, SvgProperties>(VanillaListOrderedIcon)
export const ListOrdered: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListOrderedIcon>
> = ListOrderedIcon
    