
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MailboxIcon as VanillaMailboxIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MailboxIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailboxIcon>
> = /*@__PURE__*/ build<VanillaMailboxIcon, SvgProperties>(VanillaMailboxIcon)
export const Mailbox: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMailboxIcon>
> = MailboxIcon
    