
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FunnelXIcon as VanillaFunnelXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FunnelXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFunnelXIcon>
> = /*@__PURE__*/ build<VanillaFunnelXIcon, SvgProperties>(VanillaFunnelXIcon, "VanillaFunnelXIcon")
export const FunnelX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFunnelXIcon>
> = FunnelXIcon
    