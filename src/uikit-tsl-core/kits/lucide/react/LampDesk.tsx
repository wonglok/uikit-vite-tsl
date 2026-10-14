
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LampDeskIcon as VanillaLampDeskIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LampDeskIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampDeskIcon>
> = /*@__PURE__*/ build<VanillaLampDeskIcon, SvgProperties>(VanillaLampDeskIcon, "VanillaLampDeskIcon")
export const LampDesk: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampDeskIcon>
> = LampDeskIcon
    