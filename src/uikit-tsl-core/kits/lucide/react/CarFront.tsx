
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CarFrontIcon as VanillaCarFrontIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CarFrontIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarFrontIcon>
> = /*@__PURE__*/ build<VanillaCarFrontIcon, SvgProperties>(VanillaCarFrontIcon)
export const CarFront: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCarFrontIcon>
> = CarFrontIcon
    