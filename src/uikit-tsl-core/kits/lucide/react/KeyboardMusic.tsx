
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { KeyboardMusicIcon as VanillaKeyboardMusicIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const KeyboardMusicIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyboardMusicIcon>
> = /*@__PURE__*/ build<VanillaKeyboardMusicIcon, SvgProperties>(VanillaKeyboardMusicIcon)
export const KeyboardMusic: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaKeyboardMusicIcon>
> = KeyboardMusicIcon
    