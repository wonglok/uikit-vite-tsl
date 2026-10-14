
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelTopOpenIcon as VanillaPanelTopOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelTopOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelTopOpenIcon>
> = /*@__PURE__*/ build<VanillaPanelTopOpenIcon, SvgProperties>(VanillaPanelTopOpenIcon, "VanillaPanelTopOpenIcon")
export const PanelTopOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelTopOpenIcon>
> = PanelTopOpenIcon
    