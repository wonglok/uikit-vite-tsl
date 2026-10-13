
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquarePlayIcon as VanillaSquarePlayIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquarePlayIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePlayIcon>
> = /*@__PURE__*/ build<VanillaSquarePlayIcon, SvgProperties>(VanillaSquarePlayIcon)
export const SquarePlay: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePlayIcon>
> = SquarePlayIcon
    