
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareMousePointerIcon as VanillaSquareMousePointerIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareMousePointerIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMousePointerIcon>
> = /*@__PURE__*/ build<VanillaSquareMousePointerIcon, SvgProperties>(VanillaSquareMousePointerIcon)
export const SquareMousePointer: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMousePointerIcon>
> = SquareMousePointerIcon
    