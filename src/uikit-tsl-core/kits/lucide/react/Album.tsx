
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AlbumIcon as VanillaAlbumIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AlbumIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlbumIcon>
> = /*@__PURE__*/ build<VanillaAlbumIcon, SvgProperties>(VanillaAlbumIcon)
export const Album: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAlbumIcon>
> = AlbumIcon
    