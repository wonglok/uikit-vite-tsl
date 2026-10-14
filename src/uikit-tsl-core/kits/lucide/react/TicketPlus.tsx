
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketPlusIcon as VanillaTicketPlusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketPlusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketPlusIcon>
> = /*@__PURE__*/ build<VanillaTicketPlusIcon, SvgProperties>(VanillaTicketPlusIcon, "VanillaTicketPlusIcon")
export const TicketPlus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketPlusIcon>
> = TicketPlusIcon
    