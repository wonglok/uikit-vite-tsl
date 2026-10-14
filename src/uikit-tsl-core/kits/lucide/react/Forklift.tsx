
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ForkliftIcon as VanillaForkliftIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const ForkliftIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaForkliftIcon>
> = /*@__PURE__*/ build<VanillaForkliftIcon, SvgProperties>(VanillaForkliftIcon, "VanillaForkliftIcon")
export const Forklift: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaForkliftIcon>
> = ForkliftIcon
    