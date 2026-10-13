
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LayoutPanelTopIcon as VanillaLayoutPanelTopIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LayoutPanelTopIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutPanelTopIcon>
> = /*@__PURE__*/ build<VanillaLayoutPanelTopIcon, SvgProperties>(VanillaLayoutPanelTopIcon)
export const LayoutPanelTop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutPanelTopIcon>
> = LayoutPanelTopIcon
    