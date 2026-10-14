
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListTreeIcon as VanillaListTreeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListTreeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListTreeIcon>
> = /*@__PURE__*/ build<VanillaListTreeIcon, SvgProperties>(VanillaListTreeIcon, "VanillaListTreeIcon")
export const ListTree: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListTreeIcon>
> = ListTreeIcon
    