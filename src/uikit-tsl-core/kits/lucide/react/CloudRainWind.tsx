
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudRainWindIcon as VanillaCloudRainWindIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudRainWindIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudRainWindIcon>
> = /*@__PURE__*/ build<VanillaCloudRainWindIcon, SvgProperties>(VanillaCloudRainWindIcon, "VanillaCloudRainWindIcon")
export const CloudRainWind: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudRainWindIcon>
> = CloudRainWindIcon
    