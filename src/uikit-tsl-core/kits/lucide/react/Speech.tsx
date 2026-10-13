
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SpeechIcon as VanillaSpeechIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SpeechIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpeechIcon>
> = /*@__PURE__*/ build<VanillaSpeechIcon, SvgProperties>(VanillaSpeechIcon)
export const Speech: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpeechIcon>
> = SpeechIcon
    