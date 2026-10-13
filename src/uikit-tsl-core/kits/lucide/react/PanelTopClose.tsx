
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelTopCloseIcon as VanillaPanelTopCloseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelTopCloseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelTopCloseIcon>
> = /*@__PURE__*/ build<VanillaPanelTopCloseIcon, SvgProperties>(VanillaPanelTopCloseIcon)
export const PanelTopClose: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelTopCloseIcon>
> = PanelTopCloseIcon
    