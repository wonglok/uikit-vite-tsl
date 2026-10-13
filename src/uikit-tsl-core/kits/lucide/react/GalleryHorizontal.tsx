
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GalleryHorizontalIcon as VanillaGalleryHorizontalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GalleryHorizontalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGalleryHorizontalIcon>
> = /*@__PURE__*/ build<VanillaGalleryHorizontalIcon, SvgProperties>(VanillaGalleryHorizontalIcon)
export const GalleryHorizontal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGalleryHorizontalIcon>
> = GalleryHorizontalIcon
    