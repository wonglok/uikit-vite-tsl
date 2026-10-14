
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelLeftIcon as VanillaPanelLeftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelLeftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftIcon>
> = /*@__PURE__*/ build<VanillaPanelLeftIcon, SvgProperties>(VanillaPanelLeftIcon, "VanillaPanelLeftIcon")
export const PanelLeft: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftIcon>
> = PanelLeftIcon
    