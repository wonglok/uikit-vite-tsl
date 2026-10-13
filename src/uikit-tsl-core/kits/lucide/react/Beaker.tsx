
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BeakerIcon as VanillaBeakerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BeakerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeakerIcon>
> = /*@__PURE__*/ build<VanillaBeakerIcon, SvgProperties>(VanillaBeakerIcon)
export const Beaker: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBeakerIcon>
> = BeakerIcon
    