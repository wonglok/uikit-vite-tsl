
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { WrenchIcon as VanillaWrenchIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const WrenchIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWrenchIcon>
> = /*@__PURE__*/ build<VanillaWrenchIcon, SvgProperties>(VanillaWrenchIcon)
export const Wrench: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaWrenchIcon>
> = WrenchIcon
    