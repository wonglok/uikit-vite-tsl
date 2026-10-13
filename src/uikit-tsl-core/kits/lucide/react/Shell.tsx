
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShellIcon as VanillaShellIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShellIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShellIcon>
> = /*@__PURE__*/ build<VanillaShellIcon, SvgProperties>(VanillaShellIcon)
export const Shell: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShellIcon>
> = ShellIcon
    