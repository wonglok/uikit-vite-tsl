
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudOffIcon as VanillaCloudOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudOffIcon>
> = /*@__PURE__*/ build<VanillaCloudOffIcon, SvgProperties>(VanillaCloudOffIcon)
export const CloudOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudOffIcon>
> = CloudOffIcon
    