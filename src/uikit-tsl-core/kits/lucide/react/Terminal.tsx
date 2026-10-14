
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TerminalIcon as VanillaTerminalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TerminalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTerminalIcon>
> = /*@__PURE__*/ build<VanillaTerminalIcon, SvgProperties>(VanillaTerminalIcon, "VanillaTerminalIcon")
export const Terminal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTerminalIcon>
> = TerminalIcon
    