
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HardDriveDownloadIcon as VanillaHardDriveDownloadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HardDriveDownloadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardDriveDownloadIcon>
> = /*@__PURE__*/ build<VanillaHardDriveDownloadIcon, SvgProperties>(VanillaHardDriveDownloadIcon)
export const HardDriveDownload: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardDriveDownloadIcon>
> = HardDriveDownloadIcon
    