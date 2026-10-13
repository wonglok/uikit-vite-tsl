
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CarTaxiFrontIcon as VanillaCarTaxiFrontIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CarTaxiFrontIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarTaxiFrontIcon>
> = /*@__PURE__*/ build<VanillaCarTaxiFrontIcon, SvgProperties>(VanillaCarTaxiFrontIcon)
export const CarTaxiFront: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarTaxiFrontIcon>
> = CarTaxiFrontIcon
    