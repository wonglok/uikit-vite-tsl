
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TruckElectricIcon as VanillaTruckElectricIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TruckElectricIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTruckElectricIcon>
> = /*@__PURE__*/ build<VanillaTruckElectricIcon, SvgProperties>(VanillaTruckElectricIcon)
export const TruckElectric: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTruckElectricIcon>
> = TruckElectricIcon
    