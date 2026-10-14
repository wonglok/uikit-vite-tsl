
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareDashedIcon as VanillaSquareDashedIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareDashedIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDashedIcon>
> = /*@__PURE__*/ build<VanillaSquareDashedIcon, SvgProperties>(VanillaSquareDashedIcon, "VanillaSquareDashedIcon")
export const SquareDashed: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareDashedIcon>
> = SquareDashedIcon
    