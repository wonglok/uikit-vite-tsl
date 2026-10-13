
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrafficConeIcon as VanillaTrafficConeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrafficConeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrafficConeIcon>
> = /*@__PURE__*/ build<VanillaTrafficConeIcon, SvgProperties>(VanillaTrafficConeIcon)
export const TrafficCone: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrafficConeIcon>
> = TrafficConeIcon
    