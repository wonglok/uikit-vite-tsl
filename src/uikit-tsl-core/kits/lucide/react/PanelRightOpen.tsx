
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelRightOpenIcon as VanillaPanelRightOpenIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelRightOpenIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightOpenIcon>
> = /*@__PURE__*/ build<VanillaPanelRightOpenIcon, SvgProperties>(VanillaPanelRightOpenIcon, "VanillaPanelRightOpenIcon")
export const PanelRightOpen: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightOpenIcon>
> = PanelRightOpenIcon
    