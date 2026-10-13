
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FileTerminalIcon as VanillaFileTerminalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FileTerminalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileTerminalIcon>
> = /*@__PURE__*/ build<VanillaFileTerminalIcon, SvgProperties>(VanillaFileTerminalIcon)
export const FileTerminal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFileTerminalIcon>
> = FileTerminalIcon
    