
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { AudioLinesIcon as VanillaAudioLinesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const AudioLinesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAudioLinesIcon>
> = /*@__PURE__*/ build<VanillaAudioLinesIcon, SvgProperties>(VanillaAudioLinesIcon, "VanillaAudioLinesIcon")
export const AudioLines: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaAudioLinesIcon>
> = AudioLinesIcon
    