
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ThermometerSunIcon as VanillaThermometerSunIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ThermometerSunIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThermometerSunIcon>
> = /*@__PURE__*/ build<VanillaThermometerSunIcon, SvgProperties>(VanillaThermometerSunIcon, "VanillaThermometerSunIcon")
export const ThermometerSun: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaThermometerSunIcon>
> = ThermometerSunIcon
    