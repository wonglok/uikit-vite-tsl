
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ShowerHeadIcon as VanillaShowerHeadIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ShowerHeadIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShowerHeadIcon>
> = /*@__PURE__*/ build<VanillaShowerHeadIcon, SvgProperties>(VanillaShowerHeadIcon, "VanillaShowerHeadIcon")
export const ShowerHead: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaShowerHeadIcon>
> = ShowerHeadIcon
    