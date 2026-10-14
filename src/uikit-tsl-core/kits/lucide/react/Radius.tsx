
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RadiusIcon as VanillaRadiusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RadiusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadiusIcon>
> = /*@__PURE__*/ build<VanillaRadiusIcon, SvgProperties>(VanillaRadiusIcon, "VanillaRadiusIcon")
export const Radius: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRadiusIcon>
> = RadiusIcon
    