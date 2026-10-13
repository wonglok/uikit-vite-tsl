
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareRadicalIcon as VanillaSquareRadicalIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareRadicalIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareRadicalIcon>
> = /*@__PURE__*/ build<VanillaSquareRadicalIcon, SvgProperties>(VanillaSquareRadicalIcon)
export const SquareRadical: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareRadicalIcon>
> = SquareRadicalIcon
    