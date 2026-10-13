
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareEqualIcon as VanillaSquareEqualIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareEqualIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareEqualIcon>
> = /*@__PURE__*/ build<VanillaSquareEqualIcon, SvgProperties>(VanillaSquareEqualIcon)
export const SquareEqual: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareEqualIcon>
> = SquareEqualIcon
    