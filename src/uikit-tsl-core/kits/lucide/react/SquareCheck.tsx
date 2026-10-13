
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareCheckIcon as VanillaSquareCheckIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareCheckIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareCheckIcon>
> = /*@__PURE__*/ build<VanillaSquareCheckIcon, SvgProperties>(VanillaSquareCheckIcon)
export const SquareCheck: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareCheckIcon>
> = SquareCheckIcon
    