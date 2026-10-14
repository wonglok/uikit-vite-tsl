
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NetworkIcon as VanillaNetworkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NetworkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNetworkIcon>
> = /*@__PURE__*/ build<VanillaNetworkIcon, SvgProperties>(VanillaNetworkIcon, "VanillaNetworkIcon")
export const Network: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNetworkIcon>
> = NetworkIcon
    