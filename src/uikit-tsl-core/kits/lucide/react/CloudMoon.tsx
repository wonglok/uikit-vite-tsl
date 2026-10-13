
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudMoonIcon as VanillaCloudMoonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudMoonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudMoonIcon>
> = /*@__PURE__*/ build<VanillaCloudMoonIcon, SvgProperties>(VanillaCloudMoonIcon)
export const CloudMoon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudMoonIcon>
> = CloudMoonIcon
    