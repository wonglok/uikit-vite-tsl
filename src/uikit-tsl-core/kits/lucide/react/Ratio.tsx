
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { RatioIcon as VanillaRatioIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const RatioIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRatioIcon>
> = /*@__PURE__*/ build<VanillaRatioIcon, SvgProperties>(VanillaRatioIcon)
export const Ratio: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaRatioIcon>
> = RatioIcon
    