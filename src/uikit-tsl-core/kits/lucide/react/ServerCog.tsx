
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ServerCogIcon as VanillaServerCogIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ServerCogIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerCogIcon>
> = /*@__PURE__*/ build<VanillaServerCogIcon, SvgProperties>(VanillaServerCogIcon)
export const ServerCog: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerCogIcon>
> = ServerCogIcon
    