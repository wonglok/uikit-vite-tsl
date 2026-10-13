
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CommandIcon as VanillaCommandIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CommandIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCommandIcon>
> = /*@__PURE__*/ build<VanillaCommandIcon, SvgProperties>(VanillaCommandIcon)
export const Command: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCommandIcon>
> = CommandIcon
    