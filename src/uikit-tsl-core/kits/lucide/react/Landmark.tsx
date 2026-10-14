
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LandmarkIcon as VanillaLandmarkIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LandmarkIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLandmarkIcon>
> = /*@__PURE__*/ build<VanillaLandmarkIcon, SvgProperties>(VanillaLandmarkIcon, "VanillaLandmarkIcon")
export const Landmark: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLandmarkIcon>
> = LandmarkIcon
    