
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TabletIcon as VanillaTabletIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TabletIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTabletIcon>
> = /*@__PURE__*/ build<VanillaTabletIcon, SvgProperties>(VanillaTabletIcon)
export const Tablet: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTabletIcon>
> = TabletIcon
    