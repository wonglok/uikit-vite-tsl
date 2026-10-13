
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquareAsteriskIcon as VanillaSquareAsteriskIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquareAsteriskIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareAsteriskIcon>
> = /*@__PURE__*/ build<VanillaSquareAsteriskIcon, SvgProperties>(VanillaSquareAsteriskIcon)
export const SquareAsterisk: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquareAsteriskIcon>
> = SquareAsteriskIcon
    