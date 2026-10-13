
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ContactRoundIcon as VanillaContactRoundIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ContactRoundIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContactRoundIcon>
> = /*@__PURE__*/ build<VanillaContactRoundIcon, SvgProperties>(VanillaContactRoundIcon)
export const ContactRound: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaContactRoundIcon>
> = ContactRoundIcon
    