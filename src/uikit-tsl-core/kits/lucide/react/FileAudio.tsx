
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileAudioIcon as VanillaFileAudioIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileAudioIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileAudioIcon>
> = /*@__PURE__*/ build<VanillaFileAudioIcon, SvgProperties>(VanillaFileAudioIcon, "VanillaFileAudioIcon")
export const FileAudio: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileAudioIcon>
> = FileAudioIcon
    