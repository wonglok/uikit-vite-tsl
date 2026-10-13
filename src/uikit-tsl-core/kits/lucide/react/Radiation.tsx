
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RadiationIcon as VanillaRadiationIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RadiationIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadiationIcon>
> = /*@__PURE__*/ build<VanillaRadiationIcon, SvgProperties>(VanillaRadiationIcon)
export const Radiation: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadiationIcon>
> = RadiationIcon
    