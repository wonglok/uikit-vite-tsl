
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudHailIcon as VanillaCloudHailIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudHailIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudHailIcon>
> = /*@__PURE__*/ build<VanillaCloudHailIcon, SvgProperties>(VanillaCloudHailIcon)
export const CloudHail: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudHailIcon>
> = CloudHailIcon
    