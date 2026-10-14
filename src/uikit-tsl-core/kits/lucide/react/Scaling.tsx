
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ScalingIcon as VanillaScalingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ScalingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScalingIcon>
> = /*@__PURE__*/ build<VanillaScalingIcon, SvgProperties>(VanillaScalingIcon, "VanillaScalingIcon")
export const Scaling: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaScalingIcon>
> = ScalingIcon
    