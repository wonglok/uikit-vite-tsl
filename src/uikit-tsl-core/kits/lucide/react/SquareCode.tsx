
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareCodeIcon as VanillaSquareCodeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareCodeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareCodeIcon>
> = /*@__PURE__*/ build<VanillaSquareCodeIcon, SvgProperties>(VanillaSquareCodeIcon, "VanillaSquareCodeIcon")
export const SquareCode: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareCodeIcon>
> = SquareCodeIcon
    