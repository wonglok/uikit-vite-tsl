
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LaptopIcon as VanillaLaptopIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LaptopIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaptopIcon>
> = /*@__PURE__*/ build<VanillaLaptopIcon, SvgProperties>(VanillaLaptopIcon, "VanillaLaptopIcon")
export const Laptop: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaptopIcon>
> = LaptopIcon
    