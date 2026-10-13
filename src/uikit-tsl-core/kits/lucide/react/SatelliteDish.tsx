
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SatelliteDishIcon as VanillaSatelliteDishIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SatelliteDishIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSatelliteDishIcon>
> = /*@__PURE__*/ build<VanillaSatelliteDishIcon, SvgProperties>(VanillaSatelliteDishIcon)
export const SatelliteDish: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSatelliteDishIcon>
> = SatelliteDishIcon
    