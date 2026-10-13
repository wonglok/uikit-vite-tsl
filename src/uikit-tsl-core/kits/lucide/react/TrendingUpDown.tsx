
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrendingUpDownIcon as VanillaTrendingUpDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrendingUpDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrendingUpDownIcon>
> = /*@__PURE__*/ build<VanillaTrendingUpDownIcon, SvgProperties>(VanillaTrendingUpDownIcon)
export const TrendingUpDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrendingUpDownIcon>
> = TrendingUpDownIcon
    