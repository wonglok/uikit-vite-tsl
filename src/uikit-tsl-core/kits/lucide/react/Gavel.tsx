
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GavelIcon as VanillaGavelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GavelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGavelIcon>
> = /*@__PURE__*/ build<VanillaGavelIcon, SvgProperties>(VanillaGavelIcon)
export const Gavel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGavelIcon>
> = GavelIcon
    