
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileVolumeIcon as VanillaFileVolumeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileVolumeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVolumeIcon>
> = /*@__PURE__*/ build<VanillaFileVolumeIcon, SvgProperties>(VanillaFileVolumeIcon)
export const FileVolume: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileVolumeIcon>
> = FileVolumeIcon
    