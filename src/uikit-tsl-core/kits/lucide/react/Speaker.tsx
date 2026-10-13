
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SpeakerIcon as VanillaSpeakerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SpeakerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpeakerIcon>
> = /*@__PURE__*/ build<VanillaSpeakerIcon, SvgProperties>(VanillaSpeakerIcon)
export const Speaker: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSpeakerIcon>
> = SpeakerIcon
    