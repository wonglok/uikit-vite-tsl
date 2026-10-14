
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListIcon as VanillaListIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListIcon>
> = /*@__PURE__*/ build<VanillaListIcon, SvgProperties>(VanillaListIcon, "VanillaListIcon")
export const List: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListIcon>
> = ListIcon
    