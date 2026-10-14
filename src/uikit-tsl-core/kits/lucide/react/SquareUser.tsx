
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareUserIcon as VanillaSquareUserIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareUserIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareUserIcon>
> = /*@__PURE__*/ build<VanillaSquareUserIcon, SvgProperties>(VanillaSquareUserIcon, "VanillaSquareUserIcon")
export const SquareUser: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareUserIcon>
> = SquareUserIcon
    