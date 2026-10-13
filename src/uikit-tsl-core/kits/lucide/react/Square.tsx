
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareIcon as VanillaSquareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareIcon>
> = /*@__PURE__*/ build<VanillaSquareIcon, SvgProperties>(VanillaSquareIcon)
export const Square: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareIcon>
> = SquareIcon
    