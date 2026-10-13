
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HamIcon as VanillaHamIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HamIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHamIcon>
> = /*@__PURE__*/ build<VanillaHamIcon, SvgProperties>(VanillaHamIcon)
export const Ham: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHamIcon>
> = HamIcon
    