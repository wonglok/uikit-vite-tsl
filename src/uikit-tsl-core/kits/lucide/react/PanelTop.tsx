
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelTopIcon as VanillaPanelTopIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelTopIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelTopIcon>
> = /*@__PURE__*/ build<VanillaPanelTopIcon, SvgProperties>(VanillaPanelTopIcon)
export const PanelTop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelTopIcon>
> = PanelTopIcon
    