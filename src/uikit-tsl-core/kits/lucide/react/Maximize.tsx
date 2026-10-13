
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MaximizeIcon as VanillaMaximizeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MaximizeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMaximizeIcon>
> = /*@__PURE__*/ build<VanillaMaximizeIcon, SvgProperties>(VanillaMaximizeIcon)
export const Maximize: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMaximizeIcon>
> = MaximizeIcon
    