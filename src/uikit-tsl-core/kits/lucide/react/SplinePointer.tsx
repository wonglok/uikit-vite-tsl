
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SplinePointerIcon as VanillaSplinePointerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SplinePointerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSplinePointerIcon>
> = /*@__PURE__*/ build<VanillaSplinePointerIcon, SvgProperties>(VanillaSplinePointerIcon, "VanillaSplinePointerIcon")
export const SplinePointer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSplinePointerIcon>
> = SplinePointerIcon
    