
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudCogIcon as VanillaCloudCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudCogIcon>
> = /*@__PURE__*/ build<VanillaCloudCogIcon, SvgProperties>(VanillaCloudCogIcon)
export const CloudCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudCogIcon>
> = CloudCogIcon
    