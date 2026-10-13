
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FunnelIcon as VanillaFunnelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FunnelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFunnelIcon>
> = /*@__PURE__*/ build<VanillaFunnelIcon, SvgProperties>(VanillaFunnelIcon)
export const Funnel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFunnelIcon>
> = FunnelIcon
    