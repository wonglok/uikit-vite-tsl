
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ListCollapseIcon as VanillaListCollapseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ListCollapseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListCollapseIcon>
> = /*@__PURE__*/ build<VanillaListCollapseIcon, SvgProperties>(VanillaListCollapseIcon, "VanillaListCollapseIcon")
export const ListCollapse: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaListCollapseIcon>
> = ListCollapseIcon
    