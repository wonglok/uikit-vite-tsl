
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelRightDashedIcon as VanillaPanelRightDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelRightDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightDashedIcon>
> = /*@__PURE__*/ build<VanillaPanelRightDashedIcon, SvgProperties>(VanillaPanelRightDashedIcon)
export const PanelRightDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightDashedIcon>
> = PanelRightDashedIcon
    