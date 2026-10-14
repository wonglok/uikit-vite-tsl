
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HopOffIcon as VanillaHopOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HopOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHopOffIcon>
> = /*@__PURE__*/ build<VanillaHopOffIcon, SvgProperties>(VanillaHopOffIcon, "VanillaHopOffIcon")
export const HopOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHopOffIcon>
> = HopOffIcon
    