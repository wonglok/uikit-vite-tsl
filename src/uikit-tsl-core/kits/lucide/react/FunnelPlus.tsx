
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FunnelPlusIcon as VanillaFunnelPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FunnelPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFunnelPlusIcon>
> = /*@__PURE__*/ build<VanillaFunnelPlusIcon, SvgProperties>(VanillaFunnelPlusIcon)
export const FunnelPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFunnelPlusIcon>
> = FunnelPlusIcon
    