
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AudioWaveformIcon as VanillaAudioWaveformIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AudioWaveformIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAudioWaveformIcon>
> = /*@__PURE__*/ build<VanillaAudioWaveformIcon, SvgProperties>(VanillaAudioWaveformIcon)
export const AudioWaveform: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAudioWaveformIcon>
> = AudioWaveformIcon
    