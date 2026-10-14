
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HousePlugIcon as VanillaHousePlugIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HousePlugIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHousePlugIcon>
> = /*@__PURE__*/ build<VanillaHousePlugIcon, SvgProperties>(VanillaHousePlugIcon, "VanillaHousePlugIcon")
export const HousePlug: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHousePlugIcon>
> = HousePlugIcon
    