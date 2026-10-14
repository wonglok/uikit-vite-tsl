
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { HandHelpingIcon as VanillaHandHelpingIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const HandHelpingIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandHelpingIcon>
> = /*@__PURE__*/ build<VanillaHandHelpingIcon, SvgProperties>(VanillaHandHelpingIcon, "VanillaHandHelpingIcon")
export const HandHelping: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaHandHelpingIcon>
> = HandHelpingIcon
    