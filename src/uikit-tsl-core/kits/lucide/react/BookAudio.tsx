
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BookAudioIcon as VanillaBookAudioIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BookAudioIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookAudioIcon>
> = /*@__PURE__*/ build<VanillaBookAudioIcon, SvgProperties>(VanillaBookAudioIcon, "VanillaBookAudioIcon")
export const BookAudio: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBookAudioIcon>
> = BookAudioIcon
    