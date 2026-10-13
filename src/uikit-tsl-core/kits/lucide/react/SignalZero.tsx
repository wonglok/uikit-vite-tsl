
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SignalZeroIcon as VanillaSignalZeroIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SignalZeroIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalZeroIcon>
> = /*@__PURE__*/ build<VanillaSignalZeroIcon, SvgProperties>(VanillaSignalZeroIcon)
export const SignalZero: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSignalZeroIcon>
> = SignalZeroIcon
    