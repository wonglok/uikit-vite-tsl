
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelLeftDashedIcon as VanillaPanelLeftDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelLeftDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftDashedIcon>
> = /*@__PURE__*/ build<VanillaPanelLeftDashedIcon, SvgProperties>(VanillaPanelLeftDashedIcon)
export const PanelLeftDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelLeftDashedIcon>
> = PanelLeftDashedIcon
    