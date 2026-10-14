
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketMinusIcon as VanillaTicketMinusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketMinusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketMinusIcon>
> = /*@__PURE__*/ build<VanillaTicketMinusIcon, SvgProperties>(VanillaTicketMinusIcon, "VanillaTicketMinusIcon")
export const TicketMinus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketMinusIcon>
> = TicketMinusIcon
    