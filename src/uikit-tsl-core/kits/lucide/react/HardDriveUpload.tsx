
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HardDriveUploadIcon as VanillaHardDriveUploadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HardDriveUploadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardDriveUploadIcon>
> = /*@__PURE__*/ build<VanillaHardDriveUploadIcon, SvgProperties>(VanillaHardDriveUploadIcon)
export const HardDriveUpload: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardDriveUploadIcon>
> = HardDriveUploadIcon
    