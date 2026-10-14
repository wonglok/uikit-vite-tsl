
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GalleryVerticalIcon as VanillaGalleryVerticalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GalleryVerticalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGalleryVerticalIcon>
> = /*@__PURE__*/ build<VanillaGalleryVerticalIcon, SvgProperties>(VanillaGalleryVerticalIcon, "VanillaGalleryVerticalIcon")
export const GalleryVertical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGalleryVerticalIcon>
> = GalleryVerticalIcon
    