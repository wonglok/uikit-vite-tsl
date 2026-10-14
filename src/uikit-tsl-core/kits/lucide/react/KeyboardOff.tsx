
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { KeyboardOffIcon as VanillaKeyboardOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const KeyboardOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyboardOffIcon>
> = /*@__PURE__*/ build<VanillaKeyboardOffIcon, SvgProperties>(VanillaKeyboardOffIcon, "VanillaKeyboardOffIcon")
export const KeyboardOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyboardOffIcon>
> = KeyboardOffIcon
    