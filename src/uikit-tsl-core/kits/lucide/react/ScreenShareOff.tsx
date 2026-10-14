
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScreenShareOffIcon as VanillaScreenShareOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScreenShareOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScreenShareOffIcon>
> = /*@__PURE__*/ build<VanillaScreenShareOffIcon, SvgProperties>(VanillaScreenShareOffIcon, "VanillaScreenShareOffIcon")
export const ScreenShareOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScreenShareOffIcon>
> = ScreenShareOffIcon
    