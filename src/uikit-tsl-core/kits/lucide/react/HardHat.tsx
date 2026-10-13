
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HardHatIcon as VanillaHardHatIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HardHatIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardHatIcon>
> = /*@__PURE__*/ build<VanillaHardHatIcon, SvgProperties>(VanillaHardHatIcon)
export const HardHat: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHardHatIcon>
> = HardHatIcon
    