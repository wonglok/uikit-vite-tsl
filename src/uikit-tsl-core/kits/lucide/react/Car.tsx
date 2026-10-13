
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CarIcon as VanillaCarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarIcon>
> = /*@__PURE__*/ build<VanillaCarIcon, SvgProperties>(VanillaCarIcon)
export const Car: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarIcon>
> = CarIcon
    