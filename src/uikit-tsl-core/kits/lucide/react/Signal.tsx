
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignalIcon as VanillaSignalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalIcon>
> = /*@__PURE__*/ build<VanillaSignalIcon, SvgProperties>(VanillaSignalIcon)
export const Signal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalIcon>
> = SignalIcon
    