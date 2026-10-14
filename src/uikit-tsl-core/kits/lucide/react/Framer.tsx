
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { FramerIcon as VanillaFramerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const FramerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFramerIcon>
> = /*@__PURE__*/ build<VanillaFramerIcon, SvgProperties>(VanillaFramerIcon, "VanillaFramerIcon")
export const Framer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaFramerIcon>
> = FramerIcon
    