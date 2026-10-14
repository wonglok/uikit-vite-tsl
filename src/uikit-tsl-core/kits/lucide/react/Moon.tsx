
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoonIcon as VanillaMoonIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoonIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoonIcon>
> = /*@__PURE__*/ build<VanillaMoonIcon, SvgProperties>(VanillaMoonIcon, "VanillaMoonIcon")
export const Moon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoonIcon>
> = MoonIcon
    