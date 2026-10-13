
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrendingDownIcon as VanillaTrendingDownIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrendingDownIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrendingDownIcon>
> = /*@__PURE__*/ build<VanillaTrendingDownIcon, SvgProperties>(VanillaTrendingDownIcon)
export const TrendingDown: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrendingDownIcon>
> = TrendingDownIcon
    