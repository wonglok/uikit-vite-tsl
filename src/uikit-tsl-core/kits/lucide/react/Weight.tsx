
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WeightIcon as VanillaWeightIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WeightIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWeightIcon>
> = /*@__PURE__*/ build<VanillaWeightIcon, SvgProperties>(VanillaWeightIcon, "VanillaWeightIcon")
export const Weight: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWeightIcon>
> = WeightIcon
    