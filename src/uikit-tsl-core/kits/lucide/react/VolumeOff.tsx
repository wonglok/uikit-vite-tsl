
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VolumeOffIcon as VanillaVolumeOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VolumeOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolumeOffIcon>
> = /*@__PURE__*/ build<VanillaVolumeOffIcon, SvgProperties>(VanillaVolumeOffIcon, "VanillaVolumeOffIcon")
export const VolumeOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolumeOffIcon>
> = VolumeOffIcon
    