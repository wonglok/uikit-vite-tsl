
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { SquarePercentIcon as VanillaSquarePercentIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const SquarePercentIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePercentIcon>
> = /*@__PURE__*/ build<VanillaSquarePercentIcon, SvgProperties>(VanillaSquarePercentIcon, "VanillaSquarePercentIcon")
export const SquarePercent: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaSquarePercentIcon>
> = SquarePercentIcon
    