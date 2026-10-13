
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudAlertIcon as VanillaCloudAlertIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudAlertIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudAlertIcon>
> = /*@__PURE__*/ build<VanillaCloudAlertIcon, SvgProperties>(VanillaCloudAlertIcon)
export const CloudAlert: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudAlertIcon>
> = CloudAlertIcon
    