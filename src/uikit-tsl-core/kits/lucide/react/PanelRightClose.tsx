
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PanelRightCloseIcon as VanillaPanelRightCloseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PanelRightCloseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightCloseIcon>
> = /*@__PURE__*/ build<VanillaPanelRightCloseIcon, SvgProperties>(VanillaPanelRightCloseIcon, "VanillaPanelRightCloseIcon")
export const PanelRightClose: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPanelRightCloseIcon>
> = PanelRightCloseIcon
    