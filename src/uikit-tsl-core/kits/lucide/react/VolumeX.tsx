
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VolumeXIcon as VanillaVolumeXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VolumeXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolumeXIcon>
> = /*@__PURE__*/ build<VanillaVolumeXIcon, SvgProperties>(VanillaVolumeXIcon)
export const VolumeX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolumeXIcon>
> = VolumeXIcon
    