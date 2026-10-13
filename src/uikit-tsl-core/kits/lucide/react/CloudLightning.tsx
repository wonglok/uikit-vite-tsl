
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudLightningIcon as VanillaCloudLightningIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudLightningIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudLightningIcon>
> = /*@__PURE__*/ build<VanillaCloudLightningIcon, SvgProperties>(VanillaCloudLightningIcon)
export const CloudLightning: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudLightningIcon>
> = CloudLightningIcon
    