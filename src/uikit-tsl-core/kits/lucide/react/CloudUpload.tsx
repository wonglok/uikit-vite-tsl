
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudUploadIcon as VanillaCloudUploadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudUploadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudUploadIcon>
> = /*@__PURE__*/ build<VanillaCloudUploadIcon, SvgProperties>(VanillaCloudUploadIcon, "VanillaCloudUploadIcon")
export const CloudUpload: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudUploadIcon>
> = CloudUploadIcon
    