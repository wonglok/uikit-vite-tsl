
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudRainIcon as VanillaCloudRainIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudRainIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudRainIcon>
> = /*@__PURE__*/ build<VanillaCloudRainIcon, SvgProperties>(VanillaCloudRainIcon, "VanillaCloudRainIcon")
export const CloudRain: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudRainIcon>
> = CloudRainIcon
    