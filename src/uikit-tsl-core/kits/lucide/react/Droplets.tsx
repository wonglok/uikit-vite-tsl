
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DropletsIcon as VanillaDropletsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DropletsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDropletsIcon>
> = /*@__PURE__*/ build<VanillaDropletsIcon, SvgProperties>(VanillaDropletsIcon, "VanillaDropletsIcon")
export const Droplets: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDropletsIcon>
> = DropletsIcon
    