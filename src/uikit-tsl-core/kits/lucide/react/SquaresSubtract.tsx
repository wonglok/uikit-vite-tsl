
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquaresSubtractIcon as VanillaSquaresSubtractIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquaresSubtractIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresSubtractIcon>
> = /*@__PURE__*/ build<VanillaSquaresSubtractIcon, SvgProperties>(VanillaSquaresSubtractIcon)
export const SquaresSubtract: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresSubtractIcon>
> = SquaresSubtractIcon
    