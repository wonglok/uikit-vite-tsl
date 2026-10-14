
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudDownloadIcon as VanillaCloudDownloadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudDownloadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudDownloadIcon>
> = /*@__PURE__*/ build<VanillaCloudDownloadIcon, SvgProperties>(VanillaCloudDownloadIcon, "VanillaCloudDownloadIcon")
export const CloudDownload: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudDownloadIcon>
> = CloudDownloadIcon
    