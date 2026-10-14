
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SunDimIcon as VanillaSunDimIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SunDimIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunDimIcon>
> = /*@__PURE__*/ build<VanillaSunDimIcon, SvgProperties>(VanillaSunDimIcon, "VanillaSunDimIcon")
export const SunDim: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunDimIcon>
> = SunDimIcon
    