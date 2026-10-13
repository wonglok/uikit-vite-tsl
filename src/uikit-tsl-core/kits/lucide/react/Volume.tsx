
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VolumeIcon as VanillaVolumeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VolumeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolumeIcon>
> = /*@__PURE__*/ build<VanillaVolumeIcon, SvgProperties>(VanillaVolumeIcon)
export const Volume: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVolumeIcon>
> = VolumeIcon
    