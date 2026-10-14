
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ServerCrashIcon as VanillaServerCrashIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ServerCrashIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerCrashIcon>
> = /*@__PURE__*/ build<VanillaServerCrashIcon, SvgProperties>(VanillaServerCrashIcon, "VanillaServerCrashIcon")
export const ServerCrash: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaServerCrashIcon>
> = ServerCrashIcon
    