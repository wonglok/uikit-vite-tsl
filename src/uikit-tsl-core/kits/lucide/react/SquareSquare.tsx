
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareSquareIcon as VanillaSquareSquareIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareSquareIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareSquareIcon>
> = /*@__PURE__*/ build<VanillaSquareSquareIcon, SvgProperties>(VanillaSquareSquareIcon, "VanillaSquareSquareIcon")
export const SquareSquare: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareSquareIcon>
> = SquareSquareIcon
    