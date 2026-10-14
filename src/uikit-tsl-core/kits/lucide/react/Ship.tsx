
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShipIcon as VanillaShipIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShipIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShipIcon>
> = /*@__PURE__*/ build<VanillaShipIcon, SvgProperties>(VanillaShipIcon, "VanillaShipIcon")
export const Ship: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShipIcon>
> = ShipIcon
    