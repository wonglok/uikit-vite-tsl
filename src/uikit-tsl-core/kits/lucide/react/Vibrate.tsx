
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VibrateIcon as VanillaVibrateIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VibrateIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVibrateIcon>
> = /*@__PURE__*/ build<VanillaVibrateIcon, SvgProperties>(VanillaVibrateIcon)
export const Vibrate: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVibrateIcon>
> = VibrateIcon
    