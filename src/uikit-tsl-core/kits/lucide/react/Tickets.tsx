
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketsIcon as VanillaTicketsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketsIcon>
> = /*@__PURE__*/ build<VanillaTicketsIcon, SvgProperties>(VanillaTicketsIcon)
export const Tickets: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketsIcon>
> = TicketsIcon
    