
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { LaptopMinimalCheckIcon as VanillaLaptopMinimalCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const LaptopMinimalCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaptopMinimalCheckIcon>
> = /*@__PURE__*/ build<VanillaLaptopMinimalCheckIcon, SvgProperties>(VanillaLaptopMinimalCheckIcon)
export const LaptopMinimalCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaLaptopMinimalCheckIcon>
> = LaptopMinimalCheckIcon
    