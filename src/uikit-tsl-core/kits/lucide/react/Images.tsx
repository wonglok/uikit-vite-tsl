
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ImagesIcon as VanillaImagesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ImagesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImagesIcon>
> = /*@__PURE__*/ build<VanillaImagesIcon, SvgProperties>(VanillaImagesIcon, "VanillaImagesIcon")
export const Images: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaImagesIcon>
> = ImagesIcon
    