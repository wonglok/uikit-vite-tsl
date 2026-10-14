
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { GlassesIcon as VanillaGlassesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const GlassesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlassesIcon>
> = /*@__PURE__*/ build<VanillaGlassesIcon, SvgProperties>(VanillaGlassesIcon, "VanillaGlassesIcon")
export const Glasses: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaGlassesIcon>
> = GlassesIcon
    