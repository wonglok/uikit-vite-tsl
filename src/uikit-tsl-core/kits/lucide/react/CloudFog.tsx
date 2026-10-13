
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudFogIcon as VanillaCloudFogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudFogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudFogIcon>
> = /*@__PURE__*/ build<VanillaCloudFogIcon, SvgProperties>(VanillaCloudFogIcon)
export const CloudFog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudFogIcon>
> = CloudFogIcon
    