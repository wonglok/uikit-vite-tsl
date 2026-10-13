
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ThermometerIcon as VanillaThermometerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ThermometerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThermometerIcon>
> = /*@__PURE__*/ build<VanillaThermometerIcon, SvgProperties>(VanillaThermometerIcon)
export const Thermometer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThermometerIcon>
> = ThermometerIcon
    