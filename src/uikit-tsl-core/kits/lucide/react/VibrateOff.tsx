
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VibrateOffIcon as VanillaVibrateOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VibrateOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVibrateOffIcon>
> = /*@__PURE__*/ build<VanillaVibrateOffIcon, SvgProperties>(VanillaVibrateOffIcon, "VanillaVibrateOffIcon")
export const VibrateOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVibrateOffIcon>
> = VibrateOffIcon
    