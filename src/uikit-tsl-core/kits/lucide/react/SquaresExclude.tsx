
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquaresExcludeIcon as VanillaSquaresExcludeIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquaresExcludeIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresExcludeIcon>
> = /*@__PURE__*/ build<VanillaSquaresExcludeIcon, SvgProperties>(VanillaSquaresExcludeIcon)
export const SquaresExclude: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquaresExcludeIcon>
> = SquaresExcludeIcon
    