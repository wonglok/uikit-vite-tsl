
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiscAlbumIcon as VanillaDiscAlbumIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiscAlbumIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiscAlbumIcon>
> = /*@__PURE__*/ build<VanillaDiscAlbumIcon, SvgProperties>(VanillaDiscAlbumIcon)
export const DiscAlbum: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiscAlbumIcon>
> = DiscAlbumIcon
    