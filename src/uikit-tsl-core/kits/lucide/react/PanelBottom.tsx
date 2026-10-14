
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelBottomIcon as VanillaPanelBottomIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelBottomIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelBottomIcon>
> = /*@__PURE__*/ build<VanillaPanelBottomIcon, SvgProperties>(VanillaPanelBottomIcon, "VanillaPanelBottomIcon")
export const PanelBottom: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelBottomIcon>
> = PanelBottomIcon
    