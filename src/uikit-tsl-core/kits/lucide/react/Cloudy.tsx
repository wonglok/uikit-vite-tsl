
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudyIcon as VanillaCloudyIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudyIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudyIcon>
> = /*@__PURE__*/ build<VanillaCloudyIcon, SvgProperties>(VanillaCloudyIcon, "VanillaCloudyIcon")
export const Cloudy: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudyIcon>
> = CloudyIcon
    