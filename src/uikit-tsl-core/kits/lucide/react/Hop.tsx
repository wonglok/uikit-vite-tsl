
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HopIcon as VanillaHopIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HopIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHopIcon>
> = /*@__PURE__*/ build<VanillaHopIcon, SvgProperties>(VanillaHopIcon)
export const Hop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHopIcon>
> = HopIcon
    