
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudIcon as VanillaCloudIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudIcon>
> = /*@__PURE__*/ build<VanillaCloudIcon, SvgProperties>(VanillaCloudIcon)
export const Cloud: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudIcon>
> = CloudIcon
    