
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignalMediumIcon as VanillaSignalMediumIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignalMediumIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalMediumIcon>
> = /*@__PURE__*/ build<VanillaSignalMediumIcon, SvgProperties>(VanillaSignalMediumIcon, "VanillaSignalMediumIcon")
export const SignalMedium: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalMediumIcon>
> = SignalMediumIcon
    