
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FanIcon as VanillaFanIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FanIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFanIcon>
> = /*@__PURE__*/ build<VanillaFanIcon, SvgProperties>(VanillaFanIcon, "VanillaFanIcon")
export const Fan: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFanIcon>
> = FanIcon
    