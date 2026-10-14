
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PowerOffIcon as VanillaPowerOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PowerOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPowerOffIcon>
> = /*@__PURE__*/ build<VanillaPowerOffIcon, SvgProperties>(VanillaPowerOffIcon, "VanillaPowerOffIcon")
export const PowerOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPowerOffIcon>
> = PowerOffIcon
    