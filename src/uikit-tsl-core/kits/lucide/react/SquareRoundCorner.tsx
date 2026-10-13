
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareRoundCornerIcon as VanillaSquareRoundCornerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareRoundCornerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareRoundCornerIcon>
> = /*@__PURE__*/ build<VanillaSquareRoundCornerIcon, SvgProperties>(VanillaSquareRoundCornerIcon)
export const SquareRoundCorner: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareRoundCornerIcon>
> = SquareRoundCornerIcon
    