
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PhilippinePesoIcon as VanillaPhilippinePesoIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PhilippinePesoIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhilippinePesoIcon>
> = /*@__PURE__*/ build<VanillaPhilippinePesoIcon, SvgProperties>(VanillaPhilippinePesoIcon)
export const PhilippinePeso: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPhilippinePesoIcon>
> = PhilippinePesoIcon
    