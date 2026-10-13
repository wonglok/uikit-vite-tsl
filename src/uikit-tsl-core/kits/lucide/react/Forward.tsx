
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ForwardIcon as VanillaForwardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ForwardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaForwardIcon>
> = /*@__PURE__*/ build<VanillaForwardIcon, SvgProperties>(VanillaForwardIcon)
export const Forward: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaForwardIcon>
> = ForwardIcon
    