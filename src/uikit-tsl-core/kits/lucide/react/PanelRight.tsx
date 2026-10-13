
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelRightIcon as VanillaPanelRightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelRightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightIcon>
> = /*@__PURE__*/ build<VanillaPanelRightIcon, SvgProperties>(VanillaPanelRightIcon)
export const PanelRight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightIcon>
> = PanelRightIcon
    