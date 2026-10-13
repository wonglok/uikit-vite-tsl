
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareXIcon as VanillaSquareXIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareXIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareXIcon>
> = /*@__PURE__*/ build<VanillaSquareXIcon, SvgProperties>(VanillaSquareXIcon)
export const SquareX: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareXIcon>
> = SquareXIcon
    