
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LaptopMinimalIcon as VanillaLaptopMinimalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LaptopMinimalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaptopMinimalIcon>
> = /*@__PURE__*/ build<VanillaLaptopMinimalIcon, SvgProperties>(VanillaLaptopMinimalIcon, "VanillaLaptopMinimalIcon")
export const LaptopMinimal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaptopMinimalIcon>
> = LaptopMinimalIcon
    