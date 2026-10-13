
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { KeyboardIcon as VanillaKeyboardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const KeyboardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyboardIcon>
> = /*@__PURE__*/ build<VanillaKeyboardIcon, SvgProperties>(VanillaKeyboardIcon)
export const Keyboard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyboardIcon>
> = KeyboardIcon
    