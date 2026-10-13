
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PictureInPicture2Icon as VanillaPictureInPicture2Icon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PictureInPicture2Icon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPictureInPicture2Icon>
> = /*@__PURE__*/ build<VanillaPictureInPicture2Icon, SvgProperties>(VanillaPictureInPicture2Icon)
export const PictureInPicture2: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPictureInPicture2Icon>
> = PictureInPicture2Icon
    