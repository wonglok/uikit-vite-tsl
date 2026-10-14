
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { NutIcon as VanillaNutIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const NutIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNutIcon>
> = /*@__PURE__*/ build<VanillaNutIcon, SvgProperties>(VanillaNutIcon, "VanillaNutIcon")
export const Nut: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaNutIcon>
> = NutIcon
    