
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FerrisWheelIcon as VanillaFerrisWheelIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FerrisWheelIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFerrisWheelIcon>
> = /*@__PURE__*/ build<VanillaFerrisWheelIcon, SvgProperties>(VanillaFerrisWheelIcon, "VanillaFerrisWheelIcon")
export const FerrisWheel: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFerrisWheelIcon>
> = FerrisWheelIcon
    