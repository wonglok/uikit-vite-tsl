
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareMIcon as VanillaSquareMIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareMIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMIcon>
> = /*@__PURE__*/ build<VanillaSquareMIcon, SvgProperties>(VanillaSquareMIcon)
export const SquareM: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareMIcon>
> = SquareMIcon
    