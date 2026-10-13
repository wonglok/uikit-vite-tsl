
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SplineIcon as VanillaSplineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SplineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSplineIcon>
> = /*@__PURE__*/ build<VanillaSplineIcon, SvgProperties>(VanillaSplineIcon)
export const Spline: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSplineIcon>
> = SplineIcon
    