
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareScissorsIcon as VanillaSquareScissorsIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareScissorsIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareScissorsIcon>
> = /*@__PURE__*/ build<VanillaSquareScissorsIcon, SvgProperties>(VanillaSquareScissorsIcon, "VanillaSquareScissorsIcon")
export const SquareScissors: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareScissorsIcon>
> = SquareScissorsIcon
    