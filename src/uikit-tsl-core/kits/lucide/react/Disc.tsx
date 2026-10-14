
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { DiscIcon as VanillaDiscIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const DiscIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiscIcon>
> = /*@__PURE__*/ build<VanillaDiscIcon, SvgProperties>(VanillaDiscIcon, "VanillaDiscIcon")
export const Disc: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaDiscIcon>
> = DiscIcon
    