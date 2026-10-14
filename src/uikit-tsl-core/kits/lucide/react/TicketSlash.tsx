
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketSlashIcon as VanillaTicketSlashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketSlashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketSlashIcon>
> = /*@__PURE__*/ build<VanillaTicketSlashIcon, SvgProperties>(VanillaTicketSlashIcon, "VanillaTicketSlashIcon")
export const TicketSlash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketSlashIcon>
> = TicketSlashIcon
    