
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudSnowIcon as VanillaCloudSnowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudSnowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudSnowIcon>
> = /*@__PURE__*/ build<VanillaCloudSnowIcon, SvgProperties>(VanillaCloudSnowIcon, "VanillaCloudSnowIcon")
export const CloudSnow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudSnowIcon>
> = CloudSnowIcon
    