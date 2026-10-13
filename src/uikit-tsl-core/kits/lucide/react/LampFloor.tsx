
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LampFloorIcon as VanillaLampFloorIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LampFloorIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampFloorIcon>
> = /*@__PURE__*/ build<VanillaLampFloorIcon, SvgProperties>(VanillaLampFloorIcon)
export const LampFloor: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampFloorIcon>
> = LampFloorIcon
    