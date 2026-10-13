
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TelescopeIcon as VanillaTelescopeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TelescopeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTelescopeIcon>
> = /*@__PURE__*/ build<VanillaTelescopeIcon, SvgProperties>(VanillaTelescopeIcon)
export const Telescope: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTelescopeIcon>
> = TelescopeIcon
    