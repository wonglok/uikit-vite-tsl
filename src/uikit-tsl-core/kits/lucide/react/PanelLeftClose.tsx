
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelLeftCloseIcon as VanillaPanelLeftCloseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelLeftCloseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftCloseIcon>
> = /*@__PURE__*/ build<VanillaPanelLeftCloseIcon, SvgProperties>(VanillaPanelLeftCloseIcon, "VanillaPanelLeftCloseIcon")
export const PanelLeftClose: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftCloseIcon>
> = PanelLeftCloseIcon
    