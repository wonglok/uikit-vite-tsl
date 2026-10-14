
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareUserRoundIcon as VanillaSquareUserRoundIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareUserRoundIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareUserRoundIcon>
> = /*@__PURE__*/ build<VanillaSquareUserRoundIcon, SvgProperties>(VanillaSquareUserRoundIcon, "VanillaSquareUserRoundIcon")
export const SquareUserRound: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareUserRoundIcon>
> = SquareUserRoundIcon
    