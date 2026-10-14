
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { PlugIcon as VanillaPlugIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const PlugIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlugIcon>
> = /*@__PURE__*/ build<VanillaPlugIcon, SvgProperties>(VanillaPlugIcon, "VanillaPlugIcon")
export const Plug: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaPlugIcon>
> = PlugIcon
    