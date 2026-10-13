
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketCheckIcon as VanillaTicketCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketCheckIcon>
> = /*@__PURE__*/ build<VanillaTicketCheckIcon, SvgProperties>(VanillaTicketCheckIcon)
export const TicketCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketCheckIcon>
> = TicketCheckIcon
    