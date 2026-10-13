
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GalleryThumbnailsIcon as VanillaGalleryThumbnailsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GalleryThumbnailsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGalleryThumbnailsIcon>
> = /*@__PURE__*/ build<VanillaGalleryThumbnailsIcon, SvgProperties>(VanillaGalleryThumbnailsIcon)
export const GalleryThumbnails: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGalleryThumbnailsIcon>
> = GalleryThumbnailsIcon
    