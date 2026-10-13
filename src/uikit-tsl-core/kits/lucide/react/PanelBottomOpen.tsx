
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelBottomOpenIcon as VanillaPanelBottomOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelBottomOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelBottomOpenIcon>
> = /*@__PURE__*/ build<VanillaPanelBottomOpenIcon, SvgProperties>(VanillaPanelBottomOpenIcon)
export const PanelBottomOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelBottomOpenIcon>
> = PanelBottomOpenIcon
    