
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TheaterIcon as VanillaTheaterIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TheaterIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTheaterIcon>
> = /*@__PURE__*/ build<VanillaTheaterIcon, SvgProperties>(VanillaTheaterIcon, "VanillaTheaterIcon")
export const Theater: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTheaterIcon>
> = TheaterIcon
    