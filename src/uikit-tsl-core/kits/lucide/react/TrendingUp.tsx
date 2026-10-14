
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { TrendingUpIcon as VanillaTrendingUpIcon } from '../index'
import { SvgProperties, build } from '../../../react/index'

export const TrendingUpIcon: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrendingUpIcon>
> = /*@__PURE__*/ build<VanillaTrendingUpIcon, SvgProperties>(VanillaTrendingUpIcon, "VanillaTrendingUpIcon")
export const TrendingUp: ForwardRefExoticComponent<
  PropsWithoutRef<SvgProperties> & RefAttributes<VanillaTrendingUpIcon>
> = TrendingUpIcon
    