
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MicroscopeIcon as VanillaMicroscopeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MicroscopeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicroscopeIcon>
> = /*@__PURE__*/ build<VanillaMicroscopeIcon, SvgProperties>(VanillaMicroscopeIcon, "VanillaMicroscopeIcon")
export const Microscope: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMicroscopeIcon>
> = MicroscopeIcon
    