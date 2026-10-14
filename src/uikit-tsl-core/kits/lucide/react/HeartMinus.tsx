
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HeartMinusIcon as VanillaHeartMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HeartMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartMinusIcon>
> = /*@__PURE__*/ build<VanillaHeartMinusIcon, SvgProperties>(VanillaHeartMinusIcon, "VanillaHeartMinusIcon")
export const HeartMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHeartMinusIcon>
> = HeartMinusIcon
    