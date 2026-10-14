
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MouseOffIcon as VanillaMouseOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MouseOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMouseOffIcon>
> = /*@__PURE__*/ build<VanillaMouseOffIcon, SvgProperties>(VanillaMouseOffIcon, "VanillaMouseOffIcon")
export const MouseOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMouseOffIcon>
> = MouseOffIcon
    