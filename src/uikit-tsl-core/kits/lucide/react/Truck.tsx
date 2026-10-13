
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TruckIcon as VanillaTruckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TruckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTruckIcon>
> = /*@__PURE__*/ build<VanillaTruckIcon, SvgProperties>(VanillaTruckIcon)
export const Truck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTruckIcon>
> = TruckIcon
    