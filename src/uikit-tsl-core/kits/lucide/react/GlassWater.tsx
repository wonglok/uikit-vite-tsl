
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GlassWaterIcon as VanillaGlassWaterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GlassWaterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlassWaterIcon>
> = /*@__PURE__*/ build<VanillaGlassWaterIcon, SvgProperties>(VanillaGlassWaterIcon)
export const GlassWater: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlassWaterIcon>
> = GlassWaterIcon
    