
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TicketsPlaneIcon as VanillaTicketsPlaneIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TicketsPlaneIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketsPlaneIcon>
> = /*@__PURE__*/ build<VanillaTicketsPlaneIcon, SvgProperties>(VanillaTicketsPlaneIcon)
export const TicketsPlane: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTicketsPlaneIcon>
> = TicketsPlaneIcon
    