
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LayersIcon as VanillaLayersIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LayersIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayersIcon>
> = /*@__PURE__*/ build<VanillaLayersIcon, SvgProperties>(VanillaLayersIcon)
export const Layers: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLayersIcon>
> = LayersIcon
    