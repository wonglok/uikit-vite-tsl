
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MinimizeIcon as VanillaMinimizeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MinimizeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMinimizeIcon>
> = /*@__PURE__*/ build<VanillaMinimizeIcon, SvgProperties>(VanillaMinimizeIcon)
export const Minimize: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMinimizeIcon>
> = MinimizeIcon
    