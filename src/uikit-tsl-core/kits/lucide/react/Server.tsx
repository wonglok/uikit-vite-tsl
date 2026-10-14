
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ServerIcon as VanillaServerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ServerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerIcon>
> = /*@__PURE__*/ build<VanillaServerIcon, SvgProperties>(VanillaServerIcon, "VanillaServerIcon")
export const Server: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerIcon>
> = ServerIcon
    