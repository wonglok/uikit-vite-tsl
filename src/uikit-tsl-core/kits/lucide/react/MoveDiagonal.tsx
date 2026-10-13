
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoveDiagonalIcon as VanillaMoveDiagonalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoveDiagonalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDiagonalIcon>
> = /*@__PURE__*/ build<VanillaMoveDiagonalIcon, SvgProperties>(VanillaMoveDiagonalIcon)
export const MoveDiagonal: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoveDiagonalIcon>
> = MoveDiagonalIcon
    