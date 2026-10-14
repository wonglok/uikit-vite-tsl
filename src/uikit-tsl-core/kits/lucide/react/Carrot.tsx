
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CarrotIcon as VanillaCarrotIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CarrotIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarrotIcon>
> = /*@__PURE__*/ build<VanillaCarrotIcon, SvgProperties>(VanillaCarrotIcon, "VanillaCarrotIcon")
export const Carrot: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarrotIcon>
> = CarrotIcon
    