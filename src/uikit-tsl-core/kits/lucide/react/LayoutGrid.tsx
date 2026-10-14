
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LayoutGridIcon as VanillaLayoutGridIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LayoutGridIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutGridIcon>
> = /*@__PURE__*/ build<VanillaLayoutGridIcon, SvgProperties>(VanillaLayoutGridIcon, "VanillaLayoutGridIcon")
export const LayoutGrid: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutGridIcon>
> = LayoutGridIcon
    