
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HammerIcon as VanillaHammerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HammerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHammerIcon>
> = /*@__PURE__*/ build<VanillaHammerIcon, SvgProperties>(VanillaHammerIcon)
export const Hammer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHammerIcon>
> = HammerIcon
    