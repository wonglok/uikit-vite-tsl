
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignalHighIcon as VanillaSignalHighIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignalHighIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalHighIcon>
> = /*@__PURE__*/ build<VanillaSignalHighIcon, SvgProperties>(VanillaSignalHighIcon, "VanillaSignalHighIcon")
export const SignalHigh: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalHighIcon>
> = SignalHighIcon
    