
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareCheckBigIcon as VanillaSquareCheckBigIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareCheckBigIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareCheckBigIcon>
> = /*@__PURE__*/ build<VanillaSquareCheckBigIcon, SvgProperties>(VanillaSquareCheckBigIcon)
export const SquareCheckBig: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareCheckBigIcon>
> = SquareCheckBigIcon
    