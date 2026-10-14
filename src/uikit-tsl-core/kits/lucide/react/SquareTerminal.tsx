
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareTerminalIcon as VanillaSquareTerminalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareTerminalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareTerminalIcon>
> = /*@__PURE__*/ build<VanillaSquareTerminalIcon, SvgProperties>(VanillaSquareTerminalIcon, "VanillaSquareTerminalIcon")
export const SquareTerminal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareTerminalIcon>
> = SquareTerminalIcon
    