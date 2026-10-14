
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { UploadIcon as VanillaUploadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const UploadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUploadIcon>
> = /*@__PURE__*/ build<VanillaUploadIcon, SvgProperties>(VanillaUploadIcon, "VanillaUploadIcon")
export const Upload: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaUploadIcon>
> = UploadIcon
    