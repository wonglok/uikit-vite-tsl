
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailsIcon as VanillaMailsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailsIcon>
> = /*@__PURE__*/ build<VanillaMailsIcon, SvgProperties>(VanillaMailsIcon)
export const Mails: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailsIcon>
> = MailsIcon
    