
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { MoonStarIcon as VanillaMoonStarIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const MoonStarIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoonStarIcon>
> = /*@__PURE__*/ build<VanillaMoonStarIcon, SvgProperties>(VanillaMoonStarIcon)
export const MoonStar: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaMoonStarIcon>
> = MoonStarIcon
    