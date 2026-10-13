
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudSunRainIcon as VanillaCloudSunRainIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudSunRainIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudSunRainIcon>
> = /*@__PURE__*/ build<VanillaCloudSunRainIcon, SvgProperties>(VanillaCloudSunRainIcon)
export const CloudSunRain: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudSunRainIcon>
> = CloudSunRainIcon
    