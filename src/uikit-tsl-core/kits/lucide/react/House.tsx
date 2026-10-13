
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HouseIcon as VanillaHouseIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HouseIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHouseIcon>
> = /*@__PURE__*/ build<VanillaHouseIcon, SvgProperties>(VanillaHouseIcon)
export const House: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHouseIcon>
> = HouseIcon
    