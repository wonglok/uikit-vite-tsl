
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeaterIcon as VanillaHeaterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeaterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeaterIcon>
> = /*@__PURE__*/ build<VanillaHeaterIcon, SvgProperties>(VanillaHeaterIcon)
export const Heater: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeaterIcon>
> = HeaterIcon
    