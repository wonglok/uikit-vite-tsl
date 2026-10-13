
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BellElectricIcon as VanillaBellElectricIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BellElectricIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellElectricIcon>
> = /*@__PURE__*/ build<VanillaBellElectricIcon, SvgProperties>(VanillaBellElectricIcon)
export const BellElectric: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBellElectricIcon>
> = BellElectricIcon
    