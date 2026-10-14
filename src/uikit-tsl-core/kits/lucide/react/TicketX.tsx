
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketXIcon as VanillaTicketXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketXIcon>
> = /*@__PURE__*/ build<VanillaTicketXIcon, SvgProperties>(VanillaTicketXIcon, "VanillaTicketXIcon")
export const TicketX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketXIcon>
> = TicketXIcon
    