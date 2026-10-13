
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquaresUniteIcon as VanillaSquaresUniteIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquaresUniteIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresUniteIcon>
> = /*@__PURE__*/ build<VanillaSquaresUniteIcon, SvgProperties>(VanillaSquaresUniteIcon)
export const SquaresUnite: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresUniteIcon>
> = SquaresUniteIcon
    