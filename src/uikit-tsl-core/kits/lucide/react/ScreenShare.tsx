
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScreenShareIcon as VanillaScreenShareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScreenShareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScreenShareIcon>
> = /*@__PURE__*/ build<VanillaScreenShareIcon, SvgProperties>(VanillaScreenShareIcon, "VanillaScreenShareIcon")
export const ScreenShare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScreenShareIcon>
> = ScreenShareIcon
    