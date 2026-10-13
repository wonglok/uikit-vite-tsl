
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelBottomCloseIcon as VanillaPanelBottomCloseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelBottomCloseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelBottomCloseIcon>
> = /*@__PURE__*/ build<VanillaPanelBottomCloseIcon, SvgProperties>(VanillaPanelBottomCloseIcon)
export const PanelBottomClose: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelBottomCloseIcon>
> = PanelBottomCloseIcon
    