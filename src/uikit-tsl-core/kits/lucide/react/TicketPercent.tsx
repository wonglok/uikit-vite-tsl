
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketPercentIcon as VanillaTicketPercentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketPercentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketPercentIcon>
> = /*@__PURE__*/ build<VanillaTicketPercentIcon, SvgProperties>(VanillaTicketPercentIcon, "VanillaTicketPercentIcon")
export const TicketPercent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketPercentIcon>
> = TicketPercentIcon
    