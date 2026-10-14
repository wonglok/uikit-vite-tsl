
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { EarthIcon as VanillaEarthIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const EarthIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarthIcon>
> = /*@__PURE__*/ build<VanillaEarthIcon, SvgProperties>(VanillaEarthIcon, "VanillaEarthIcon")
export const Earth: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaEarthIcon>
> = EarthIcon
    