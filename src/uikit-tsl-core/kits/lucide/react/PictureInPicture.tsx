
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PictureInPictureIcon as VanillaPictureInPictureIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PictureInPictureIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPictureInPictureIcon>
> = /*@__PURE__*/ build<VanillaPictureInPictureIcon, SvgProperties>(VanillaPictureInPictureIcon)
export const PictureInPicture: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPictureInPictureIcon>
> = PictureInPictureIcon
    