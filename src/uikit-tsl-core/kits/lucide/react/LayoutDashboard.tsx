
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LayoutDashboardIcon as VanillaLayoutDashboardIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LayoutDashboardIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutDashboardIcon>
> = /*@__PURE__*/ build<VanillaLayoutDashboardIcon, SvgProperties>(VanillaLayoutDashboardIcon, "VanillaLayoutDashboardIcon")
export const LayoutDashboard: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayoutDashboardIcon>
> = LayoutDashboardIcon
    