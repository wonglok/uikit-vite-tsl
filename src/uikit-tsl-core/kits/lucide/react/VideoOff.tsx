
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VideoOffIcon as VanillaVideoOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VideoOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVideoOffIcon>
> = /*@__PURE__*/ build<VanillaVideoOffIcon, SvgProperties>(VanillaVideoOffIcon)
export const VideoOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVideoOffIcon>
> = VideoOffIcon
    