
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CloudDrizzleIcon as VanillaCloudDrizzleIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CloudDrizzleIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudDrizzleIcon>
> = /*@__PURE__*/ build<VanillaCloudDrizzleIcon, SvgProperties>(VanillaCloudDrizzleIcon)
export const CloudDrizzle: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCloudDrizzleIcon>
> = CloudDrizzleIcon
    