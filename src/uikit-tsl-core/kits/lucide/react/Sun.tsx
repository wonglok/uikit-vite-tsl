
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SunIcon as VanillaSunIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SunIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunIcon>
> = /*@__PURE__*/ build<VanillaSunIcon, SvgProperties>(VanillaSunIcon, "VanillaSunIcon")
export const Sun: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSunIcon>
> = SunIcon
    