
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WallpaperIcon as VanillaWallpaperIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WallpaperIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWallpaperIcon>
> = /*@__PURE__*/ build<VanillaWallpaperIcon, SvgProperties>(VanillaWallpaperIcon)
export const Wallpaper: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWallpaperIcon>
> = WallpaperIcon
    