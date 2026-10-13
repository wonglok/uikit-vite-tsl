
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CaravanIcon as VanillaCaravanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CaravanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaravanIcon>
> = /*@__PURE__*/ build<VanillaCaravanIcon, SvgProperties>(VanillaCaravanIcon)
export const Caravan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCaravanIcon>
> = CaravanIcon
    