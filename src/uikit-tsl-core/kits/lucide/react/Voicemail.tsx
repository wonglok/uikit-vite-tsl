
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { VoicemailIcon as VanillaVoicemailIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const VoicemailIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVoicemailIcon>
> = /*@__PURE__*/ build<VanillaVoicemailIcon, SvgProperties>(VanillaVoicemailIcon)
export const Voicemail: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaVoicemailIcon>
> = VoicemailIcon
    