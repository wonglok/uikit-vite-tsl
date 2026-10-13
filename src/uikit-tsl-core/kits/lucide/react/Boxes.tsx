
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { BoxesIcon as VanillaBoxesIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const BoxesIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoxesIcon>
> = /*@__PURE__*/ build<VanillaBoxesIcon, SvgProperties>(VanillaBoxesIcon)
export const Boxes: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaBoxesIcon>
> = BoxesIcon
    