
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NutOffIcon as VanillaNutOffIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NutOffIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNutOffIcon>
> = /*@__PURE__*/ build<VanillaNutOffIcon, SvgProperties>(VanillaNutOffIcon)
export const NutOff: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNutOffIcon>
> = NutOffIcon
    