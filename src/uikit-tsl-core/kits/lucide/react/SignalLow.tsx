
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignalLowIcon as VanillaSignalLowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignalLowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalLowIcon>
> = /*@__PURE__*/ build<VanillaSignalLowIcon, SvgProperties>(VanillaSignalLowIcon, "VanillaSignalLowIcon")
export const SignalLow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalLowIcon>
> = SignalLowIcon
    