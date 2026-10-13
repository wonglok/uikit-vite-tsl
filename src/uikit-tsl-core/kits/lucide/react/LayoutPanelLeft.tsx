
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LayoutPanelLeftIcon as VanillaLayoutPanelLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LayoutPanelLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutPanelLeftIcon>
> = /*@__PURE__*/ build<VanillaLayoutPanelLeftIcon, SvgProperties>(VanillaLayoutPanelLeftIcon)
export const LayoutPanelLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutPanelLeftIcon>
> = LayoutPanelLeftIcon
    