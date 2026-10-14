
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VideoIcon as VanillaVideoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VideoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVideoIcon>
> = /*@__PURE__*/ build<VanillaVideoIcon, SvgProperties>(VanillaVideoIcon, "VanillaVideoIcon")
export const Video: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVideoIcon>
> = VideoIcon
    