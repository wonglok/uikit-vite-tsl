
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudSunIcon as VanillaCloudSunIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudSunIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudSunIcon>
> = /*@__PURE__*/ build<VanillaCloudSunIcon, SvgProperties>(VanillaCloudSunIcon, "VanillaCloudSunIcon")
export const CloudSun: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudSunIcon>
> = CloudSunIcon
    