
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LampIcon as VanillaLampIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LampIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampIcon>
> = /*@__PURE__*/ build<VanillaLampIcon, SvgProperties>(VanillaLampIcon, "VanillaLampIcon")
export const Lamp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampIcon>
> = LampIcon
    