
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { CompassIcon as VanillaCompassIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const CompassIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCompassIcon>
> = /*@__PURE__*/ build<VanillaCompassIcon, SvgProperties>(VanillaCompassIcon, "VanillaCompassIcon")
export const Compass: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaCompassIcon>
> = CompassIcon
    