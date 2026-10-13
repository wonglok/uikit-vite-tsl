
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BaselineIcon as VanillaBaselineIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BaselineIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBaselineIcon>
> = /*@__PURE__*/ build<VanillaBaselineIcon, SvgProperties>(VanillaBaselineIcon)
export const Baseline: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBaselineIcon>
> = BaselineIcon
    