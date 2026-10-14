
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImagePlusIcon as VanillaImagePlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImagePlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImagePlusIcon>
> = /*@__PURE__*/ build<VanillaImagePlusIcon, SvgProperties>(VanillaImagePlusIcon, "VanillaImagePlusIcon")
export const ImagePlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImagePlusIcon>
> = ImagePlusIcon
    