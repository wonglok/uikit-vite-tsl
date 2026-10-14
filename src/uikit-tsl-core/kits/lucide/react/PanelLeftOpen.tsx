
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelLeftOpenIcon as VanillaPanelLeftOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelLeftOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftOpenIcon>
> = /*@__PURE__*/ build<VanillaPanelLeftOpenIcon, SvgProperties>(VanillaPanelLeftOpenIcon, "VanillaPanelLeftOpenIcon")
export const PanelLeftOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftOpenIcon>
> = PanelLeftOpenIcon
    