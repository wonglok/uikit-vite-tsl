
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TorusIcon as VanillaTorusIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TorusIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTorusIcon>
> = /*@__PURE__*/ build<VanillaTorusIcon, SvgProperties>(VanillaTorusIcon)
export const Torus: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTorusIcon>
> = TorusIcon
    