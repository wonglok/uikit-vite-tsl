
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RainbowIcon as VanillaRainbowIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RainbowIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRainbowIcon>
> = /*@__PURE__*/ build<VanillaRainbowIcon, SvgProperties>(VanillaRainbowIcon, "VanillaRainbowIcon")
export const Rainbow: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRainbowIcon>
> = RainbowIcon
    