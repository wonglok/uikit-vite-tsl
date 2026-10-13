
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LampWallUpIcon as VanillaLampWallUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LampWallUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampWallUpIcon>
> = /*@__PURE__*/ build<VanillaLampWallUpIcon, SvgProperties>(VanillaLampWallUpIcon)
export const LampWallUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLampWallUpIcon>
> = LampWallUpIcon
    