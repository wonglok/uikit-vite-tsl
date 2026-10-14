
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudMoonRainIcon as VanillaCloudMoonRainIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudMoonRainIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudMoonRainIcon>
> = /*@__PURE__*/ build<VanillaCloudMoonRainIcon, SvgProperties>(VanillaCloudMoonRainIcon, "VanillaCloudMoonRainIcon")
export const CloudMoonRain: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudMoonRainIcon>
> = CloudMoonRainIcon
    