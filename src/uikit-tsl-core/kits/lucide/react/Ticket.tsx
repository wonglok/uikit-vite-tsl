
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketIcon as VanillaTicketIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketIcon>
> = /*@__PURE__*/ build<VanillaTicketIcon, SvgProperties>(VanillaTicketIcon)
export const Ticket: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketIcon>
> = TicketIcon
    