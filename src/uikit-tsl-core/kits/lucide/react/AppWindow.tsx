
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AppWindowIcon as VanillaAppWindowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AppWindowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAppWindowIcon>
> = /*@__PURE__*/ build<VanillaAppWindowIcon, SvgProperties>(VanillaAppWindowIcon)
export const AppWindow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAppWindowIcon>
> = AppWindowIcon
    